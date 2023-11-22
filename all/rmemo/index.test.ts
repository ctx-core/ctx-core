import { deepStrictEqual } from 'node:assert'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { sleep } from '../sleep/index.js'
import { r_rmemo_, type r_rmemo_T, rw_rmemo_, rwr_rmemo_ } from './index.js'
test('r_rmemo_|static value', ()=>{
	let count = 0
	const r_rmemo = r_rmemo_(()=>{
		count++
		return 'rmemo-value'
	})
	equal(count, 0)
	equal(r_rmemo._, 'rmemo-value')
	equal(count, 1)
	equal(r_rmemo._, 'rmemo-value')
	equal(count, 1)
})
test('r_rmemo_|def function|rmemo argument', ()=>{
	const rw_rmemo = rw_rmemo_('val0')
	const r_rmemo:r_rmemo_T<string>&{ custom?:string } = r_rmemo_<string>((_rmemo$:r_rmemo_T<string>&{ custom?:string })=>
		`${_rmemo$.custom}-${rw_rmemo._}`)
	r_rmemo.custom = 'custom_val0'
	equal(r_rmemo._, 'custom_val0-val0')
	r_rmemo.custom = 'custom_val1'
	equal(r_rmemo._, 'custom_val0-val0')
	rw_rmemo._ = 'val1'
	equal(r_rmemo._, 'custom_val1-val1')
})
test('r_memo_|side effect', ()=>{
	const history:string[] = []
	const s = rw_rmemo_('This')
	r_rmemo_(()=>history.push(s._))._
	s._ = 'is'
	s._ = 'a'
	s._ = 'test'
	s._ = 'test'
	equal(history, ['This', 'is', 'a', 'test'])
})
test('rwr_rmemo_', ()=>{
	const num_items$ = rw_rmemo_(0)
	const items$ = r_rmemo_(()=>[...Array(num_items$._).keys()].map(i=>`Item ${i + 1}`))
	const selected_index$ = rwr_rmemo_(()=>(items$._, 0))
	const selected_item$ = r_rmemo_(()=>items$._[selected_index$._])
	num_items$._ = 3
	equal(num_items$._, 3)
	equal(items$._.join(','), 'Item 1,Item 2,Item 3')
	equal(selected_index$._, 0)
	equal(selected_item$._, 'Item 1')
	selected_index$._ = 2
	equal(selected_index$._, 2)
	equal(selected_item$._, 'Item 3')
	num_items$._ = 5
	equal(num_items$._, 5)
	equal(items$._.join(','), 'Item 1,Item 2,Item 3,Item 4,Item 5')
	equal(selected_index$._, 0)
	equal(selected_item$._, 'Item 1')
	selected_index$._ = 3
	equal(selected_index$._, 3)
	equal(selected_item$._, 'Item 4')
})
test('r_rmemo_|error', ()=>{
	const rw0 = rw_rmemo_(1)
	const r1 = r_rmemo_(()=>rw0._ * 2)
	const r2 = r_rmemo_(()=>{
		if (rw0._ > 1) throw new Error()
		return rw0._
	})
	const r3 = r_rmemo_(()=>rw0._ * rw0._)
	equal(r1._, 2)
	equal(r2._, 1)
	equal(r3._, 1)
	rw0._ = 3
	equal(r1._, 6)
	// r2._ keeps it's old value of 1 due to error
	equal(r2._, 1)
	equal(r3._, 9)
})
test('rw_rmemo_', ()=>{
	const rw_rmemo = rw_rmemo_('val0')
	equal(rw_rmemo._, 'val0')
	rw_rmemo._ = 'val1'
	equal(rw_rmemo._, 'val1')
})
test('rw_rmemo_|undefined', ()=>{
	const rw_rmemo = rw_rmemo_(undefined)
	const r_rmemo = r_rmemo_(()=>rw_rmemo._)
	equal(rw_rmemo._, undefined)
	equal(r_rmemo._, undefined)
})
test('rw_rmemo_|async subsubscriber|case 1', async ()=>{
	let resolve:(user:{ id:string })=>void
	const user0 = { id: 'id-0' }
	const user1 = { id: 'id-1' }
	const id$ = rw_rmemo_('id-0')
	let count = 0
	const user$ = rw_rmemo_<{ id:string }|null>(
		null,
		async (_user$)=>{
			count++
			id$._
			const user:{ id:string } = await new Promise(_resolve=>resolve = _resolve)
			_user$._ = (user)
		})
	equal(count, 0)
	equal(user$._, null)
	equal(count, 1)
	resolve!(user0)
	await sleep(0)
	equal(count, 1)
	equal(user$._, user0)
	equal(count, 1)
	id$._ = 'id-1'
	equal(count, 2)
	equal(user$._, user0)
	resolve!(user1)
	await sleep(0)
	equal(count, 2)
})
test('rw_rmemo_|async subsubscriber|case 2', async ()=>{
	const a$ = rw_rmemo_(1)
	const b$ = rw_rmemo_(2)
	const sleepCycles = 5
	const taskArgumentsCalls:number[][] = []
	const sum$ = rw_rmemo_<null|number>(null,
		async sum$=>{
			taskArgumentsCalls.push([a$._, b$._])
			for (let i = 0; i < sleepCycles; i++) {
				await Promise.resolve()
			}
			sum$._ = a$._ + b$._
		})
	equal(sum$._, null)
	deepStrictEqual(taskArgumentsCalls, [[1, 2]])
	a$._ = 10
	b$._ = 20
	for (let i = 0; i < sleepCycles; i++) {
		equal(sum$._, null)
		await Promise.resolve()
		deepStrictEqual(taskArgumentsCalls, [
			[1, 2],
			[10, 2],
			[10, 20]
		])
	}
	equal(sum$._, 30)
	deepStrictEqual(taskArgumentsCalls, [
		[1, 2],
		[10, 2],
		[10, 20]
	])
})
test('r_rmemo_+rw_rmemo_|simple graph', ()=>{
	const base$ = rw_rmemo_('base0')
	const dep0$ = r_rmemo_(()=>base$._ + '-dep0')
	const dep1$ = r_rmemo_(()=>dep0$._ + '-dep1')
	const dep2$ = r_rmemo_(()=>dep1$._ + '-dep2')
	const dep3$ = r_rmemo_(()=>dep2$._ + '-dep3')
	const dep4$ = r_rmemo_(()=>dep3$._ + '-dep4')
	equal(dep4$._, 'base0-dep0-dep1-dep2-dep3-dep4')
	equal(dep3$._, 'base0-dep0-dep1-dep2-dep3')
	equal(dep2$._, 'base0-dep0-dep1-dep2')
	equal(dep1$._, 'base0-dep0-dep1')
	equal(dep0$._, 'base0-dep0')
	equal(base$._, 'base0')
	base$._ = 'base1'
	equal(base$._, 'base1')
	equal(dep0$._, 'base1-dep0')
	equal(dep1$._, 'base1-dep0-dep1')
	equal(dep2$._, 'base1-dep0-dep1-dep2')
	equal(dep3$._, 'base1-dep0-dep1-dep2-dep3')
	equal(dep4$._, 'base1-dep0-dep1-dep2-dep3-dep4')
})
test('prevents diamond dependency problem 1', ()=>{
	const store$ = rw_rmemo_(0)
	const values:string[] = []
	const a$ = r_rmemo_(()=>`a${store$._}`)
	const b$ = r_rmemo_(()=>a$._.replace('a', 'b'))
	const c$ = r_rmemo_(()=>a$._.replace('a', 'c'))
	const d$ = r_rmemo_(()=>a$._.replace('a', 'd'))
	r_rmemo_(()=>`${b$._}${c$._}${d$._}`,
		combined$=>
			values.push(combined$._)
	)._
	deepStrictEqual(values, ['b0c0d0'])
	store$._ = 1
	store$._ = 2
	deepStrictEqual(values, ['b0c0d0', 'b1c1d1', 'b2c2d2'])
})
test('prevents diamond dependency problem 2', ()=>{
	const store$ = rw_rmemo_(0)
	const values:string[] = []
	const a$ = r_rmemo_(()=>`a${store$._}`)
	const b$ = r_rmemo_(()=>a$._.replace('a', 'b'))
	const c$ = r_rmemo_(()=>b$._.replace('b', 'c'))
	const d$ = r_rmemo_(()=>c$._.replace('c', 'd'))
	const e$ = r_rmemo_(()=>d$._.replace('d', 'e'))
	r_rmemo_<string>(
		()=>[a$._, e$._].join(''),
		$=>values.push($._)
	)._
	deepStrictEqual(values, ['a0e0'])
	store$._ = 1
	deepStrictEqual(values, ['a0e0', 'a1e1'])
})
test('prevents diamond dependency problem 3', ()=>{
	const store$ = rw_rmemo_(0)
	const values:string[] = []
	const a$ = r_rmemo_(()=>`a${store$._}`)
	const b$ = r_rmemo_(()=>a$._.replace('a', 'b'))
	const c$ = r_rmemo_(()=>b$._.replace('b', 'c'))
	const d$ = r_rmemo_(()=>c$._.replace('c', 'd'))
	r_rmemo_<string>(
		()=>`${a$._}${b$._}${c$._}${d$._}`,
		combined$=>values.push(combined$._)
	)._
	deepStrictEqual(values, ['a0b0c0d0'])
	store$._ = 1
	deepStrictEqual(values, ['a0b0c0d0', 'a1b1c1d1'])
})
test('autosubscribe: prevents diamond dependency problem 4 (complex)', ()=>{
	const store1$ = rw_rmemo_(0)
	const store2$ = rw_rmemo_(0)
	const values:string[] = []
	const a$ = r_rmemo_(()=>`a${store1$._}`)
	const b$ = r_rmemo_(()=>`b${store2$._}`)
	const c$ = r_rmemo_(()=>`c${a$._}${b$._}`)
	const d$ = r_rmemo_(()=>`d${a$._}`)
	const e$ = r_rmemo_(()=>`e${c$._}${d$._}`)
	const f$ = r_rmemo_(()=>`f${e$._}`)
	const g$ = r_rmemo_(()=>`g${f$._}`)
	r_rmemo_(
		()=>e$._,
		combined1$=>values.push(combined1$._)
	)._
	r_rmemo_(
		()=>[e$._, g$._].join(''),
		combined2$=>values.push(combined2$._)
	)._
	deepStrictEqual(values, ['eca0b0da0', 'eca0b0da0gfeca0b0da0'])
	store1$._ = 1
	store2$._ = 2
	deepStrictEqual(values, [
		'eca0b0da0',
		'eca0b0da0gfeca0b0da0',
		'eca1b0da1',
		'eca1b0da1gfeca1b0da1',
		'eca1b2da1',
		'eca1b2da1gfeca1b2da1'
	])
})
test('prevents diamond dependency problem 5', ()=>{
	let events = ''
	const firstName$ = rw_rmemo_('John')
	const lastName$ = rw_rmemo_('Doe')
	const fullName$ = r_rmemo_(()=>{
		events += 'full '
		return `${firstName$._} ${lastName$._}`
	})
	const isFirstShort$ = r_rmemo_(()=>{
		events += 'short '
		return firstName$._.length < 10
	})
	const displayName$ = r_rmemo_(
		()=>{
			events += 'display '
			return isFirstShort$._ ? fullName$._ : firstName$._
		}
	)
	equal(events, '')
	equal(displayName$._, 'John Doe')
	equal(events, 'display short full ')
	firstName$._ = 'Benedict'
	equal(displayName$._, 'Benedict Doe')
	equal(events, 'display short full short full display ')
	firstName$._ = 'Montgomery'
	equal(displayName$._, 'Montgomery')
	equal(events, 'display short full short full display short full display ')
})
test('prevents diamond dependency problem 6', ()=>{
	const store1$ = rw_rmemo_(0)
	const store2$ = rw_rmemo_(0)
	const values:string[] = []
	const a$ = r_rmemo_(()=>`a${store1$._}`)
	const b$ = r_rmemo_(()=>`b${store2$._}`)
	const c$ = r_rmemo_(()=>b$._.replace('b', 'c'))
	r_rmemo_(
		()=>`${a$._}${c$._}`,
		combined$=>values.push(combined$._)
	)._
	deepStrictEqual(values, ['a0c0'])
	store1$._ = 1
	deepStrictEqual(values, ['a0c0', 'a1c0'])
})
test('prevents dependency listeners from being out of order', ()=>{
	const base$ = rw_rmemo_(0)
	const a$ = r_rmemo_(()=>{
		return `${base$._}a`
	})
	const values:string[] = []
	const b$ = r_rmemo_(()=>{
		return `${a$._}b`
	}, b$=>values.push(b$._))
	equal(b$._, '0ab')
	deepStrictEqual(values, ['0ab'])
	equal(a$._, '0a')
	base$._ = 1
	deepStrictEqual(values, ['0ab', '1ab'])
})
test('computes initial value when argument is undefined', ()=>{
	const one$ = rw_rmemo_<string|undefined>(undefined)
	const two$ = r_rmemo_(()=>!!one$._)
	equal(one$._, undefined)
	equal(two$._, false)
})
test.run()
