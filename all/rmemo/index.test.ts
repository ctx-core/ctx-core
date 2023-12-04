// Reference: https://github.com/nanostores/nanostores/blob/main/computed/index.test.ts
// Reference: https://github.com/vanjs-org/van/blob/main/test/van.test.ts
import { deepStrictEqual } from 'node:assert'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { sleep } from '../sleep/index.js'
import { memo_, type memo_T, memosig_, sig_ } from './index.js'
test('memo_|static value', ()=>{
	let count = 0
	const memo = memo_(()=>{
		count++
		return 'rmemo-value'
	})
	equal(count, 0)
	equal(memo(), 'rmemo-value')
	equal(count, 1)
	equal(memo(), 'rmemo-value')
	equal(count, 1)
})
test('memo_|def function|rmemo argument', ()=>{
	const sig = sig_('val0')
	const memo:memo_T<string>&{ custom?:string } = memo_<string>((_rmemo$:memo_T<string>&{ custom?:string })=>
		`${_rmemo$.custom}-${sig()}`)
	memo.custom = 'custom_val0'
	equal(memo(), 'custom_val0-val0')
	memo.custom = 'custom_val1'
	equal(memo(), 'custom_val0-val0')
	sig._ = 'val1'
	equal(memo(), 'custom_val1-val1')
})
test('memo_|side effect', ()=>{
	const history:string[] = []
	const s = sig_('This')
	memo_(()=>history.push(s()))()
	s._ = 'is'
	s._ = 'a'
	s._ = 'test'
	s._ = 'test'
	equal(history, ['This', 'is', 'a', 'test'])
})
test('memo_|undefined', ()=>{
	let count = 0
	const memo = memo_(()=>{
		count++
		return undefined
	})
	equal(count, 0)
	equal(memo(), undefined)
	equal(count, 1)
	equal(memo(), undefined)
	equal(count, 1)
})
test('memo_|conditional', ()=>{
	const cond$ = sig_(true)
	const a$ = sig_(1)
	const b$ = sig_(2)
	const c$ = sig_(3)
	const d$ = sig_(4)
	let trigger_count = 0
	const sum$ = memo_(()=>(++trigger_count, cond$() ? a$() + b$() : c$() + d$()))
	equal(sum$(), 3)
	equal(trigger_count, 1)
	a$._ = 11
	equal(sum$(), 13)
	equal(trigger_count, 2)
	b$._ = 12
	equal(sum$(), 23)
	equal(trigger_count, 3)
	// Changing c$ or d$ won't triggered the effect as they're not its current dependencies
	c$._ = 13
	equal(sum$(), 23)
	equal(trigger_count, 3)
	d$._ = 14
	equal(sum$(), 23)
	equal(trigger_count, 3)
	cond$._ = false
	equal(sum$(), 27)
	equal(trigger_count, 4)
	c$._ = 23
	equal(sum$(), 37)
	equal(trigger_count, 5)
	d$._ = 24
	equal(sum$(), 47)
	equal(trigger_count, 6)
	// Changing a$ or b$ won't triggered the effect as they're not its current dependencies
	a$._ = 21
	equal(sum$(), 47)
	equal(trigger_count, 6)
	b$._ = 22
	equal(sum$(), 47)
	equal(trigger_count, 6)
})
test('memosig_', ()=>{
	const num_items$ = sig_(0)
	const items$ = memo_(()=>[...Array(num_items$()).keys()].map(i=>`Item ${i + 1}`))
	// TODO: Jetbrains or Typescript type inference is wrong without generic
	const selected_index$ = memosig_<number>(()=>(items$(), 0))
	const selected_item$ = memo_(()=>items$()[selected_index$()])
	num_items$._ = 3
	equal(num_items$(), 3)
	equal(items$().join(','), 'Item 1,Item 2,Item 3')
	equal(selected_index$(), 0)
	equal(selected_item$(), 'Item 1')
	selected_index$._ = 2
	equal(selected_index$(), 2)
	equal(selected_item$(), 'Item 3')
	num_items$._ = 5
	equal(num_items$(), 5)
	equal(items$().join(','), 'Item 1,Item 2,Item 3,Item 4,Item 5')
	equal(selected_index$(), 0)
	equal(selected_item$(), 'Item 1')
	selected_index$._ = 3
	equal(selected_index$(), 3)
	equal(selected_item$(), 'Item 4')
})
test('memo_|error|case 1', ()=>{
	const r$ = memo_(()=>{
		throw new Error('error case')
	})
	equal(r$(), undefined)
})
test('memo_|error|case 2', ()=>{
	const rw0 = sig_(1)
	const r1 = memo_(()=>rw0() * 2)
	const r2 = memo_(()=>{
		if (rw0() > 1) throw new Error()
		return rw0()
	})
	const r3 = memo_(()=>rw0() * rw0())
	equal(r1(), 2)
	equal(r2(), 1)
	equal(r3(), 1)
	rw0._ = 3
	equal(r1(), 6)
	// r2() keeps it's old value of 1 due to error
	equal(r2(), 1)
	equal(r3(), 9)
})
test('sig_', ()=>{
	const sig = sig_('val0')
	equal(sig(), 'val0')
	sig._ = 'val1'
	equal(sig(), 'val1')
})
test('sig_|set before read', ()=>{
	const sig = sig_('val0')
	sig._ = 'val1'
	equal(sig(), 'val1')
})
test('sig_|undefined', ()=>{
	const sig = sig_(undefined)
	const memo = memo_(()=>sig())
	equal(sig(), undefined)
	equal(memo(), undefined)
})
test('sig_|subscriber|notified if sig is set before read', ()=>{
	let count = 0
	let subscriber__num:number|undefined = undefined
	const num$ = sig_<number|undefined>(
		undefined,
		num$=>{
			count++
			subscriber__num = num$()
		})
	equal(count, 0)
	equal(subscriber__num, undefined)
	num$._ = 1
	equal(count, 1)
	equal(subscriber__num, 1)
	num$()
	equal(count, 1)
	equal(subscriber__num, 1)
})
test('sig_|subscriber|sets sig', ()=>{
	const base$ = sig_(0)
	let count = 0
	const num$ = sig_(
		0,
		async num$=>{
			count++
			num$._ = base$() + 1
		})
	equal(count, 0)
	equal(num$(), 1)
	equal(count, 1)
	base$._ = 5
	equal(num$(), 6)
	equal(count, 2)
})
test('sig_|async subsubscriber|case 1', async ()=>{
	let resolve:(user:{ id:string })=>void
	const user0 = { id: 'id-0' }
	const user1 = { id: 'id-1' }
	const id$ = sig_('id-0')
	let count = 0
	const user$ = sig_<{ id:string }|null>(
		null,
		async (_user$)=>{
			count++
			id$()
			const user:{ id:string } = await new Promise(_resolve=>resolve = _resolve)
			_user$._ = user
		})
	equal(count, 0)
	equal(user$(), null)
	equal(count, 1)
	resolve!(user0)
	await sleep(0)
	equal(count, 1)
	equal(user$(), user0)
	equal(count, 1)
	id$._ = 'id-1'
	equal(count, 2)
	equal(user$(), user0)
	resolve!(user1)
	await sleep(0)
	equal(count, 2)
})
test('sig_|async subsubscriber|case 2', async ()=>{
	const a$ = sig_(1)
	const b$ = sig_(2)
	const sleepCycles = 5
	const taskArgumentsCalls:number[][] = []
	const sum$ = sig_<null|number>(null,
		async sum$=>{
			taskArgumentsCalls.push([a$(), b$()])
			for (let i = 0; i < sleepCycles; i++) {
				await Promise.resolve()
			}
			sum$._ = a$() + b$()
		})
	equal(sum$(), null)
	deepStrictEqual(taskArgumentsCalls, [[1, 2]])
	a$._ = 10
	b$._ = 20
	for (let i = 0; i < sleepCycles; i++) {
		equal(sum$(), null)
		await Promise.resolve()
		deepStrictEqual(taskArgumentsCalls, [
			[1, 2],
			[10, 2],
			[10, 20]
		])
	}
	equal(sum$(), 30)
	deepStrictEqual(taskArgumentsCalls, [
		[1, 2],
		[10, 2],
		[10, 20]
	])
})
test('memo_+sig_|simple graph', ()=>{
	const base$ = sig_('base0')
	const dep0$ = memo_(()=>base$() + '-dep0')
	const dep1$ = memo_(()=>dep0$() + '-dep1')
	const dep2$ = memo_(()=>dep1$() + '-dep2')
	const dep3$ = memo_(()=>dep2$() + '-dep3')
	const dep4$ = memo_(()=>dep3$() + '-dep4')
	equal(dep4$(), 'base0-dep0-dep1-dep2-dep3-dep4')
	equal(dep3$(), 'base0-dep0-dep1-dep2-dep3')
	equal(dep2$(), 'base0-dep0-dep1-dep2')
	equal(dep1$(), 'base0-dep0-dep1')
	equal(dep0$(), 'base0-dep0')
	equal(base$(), 'base0')
	base$._ = 'base1'
	equal(base$(), 'base1')
	equal(dep0$(), 'base1-dep0')
	equal(dep1$(), 'base1-dep0-dep1')
	equal(dep2$(), 'base1-dep0-dep1-dep2')
	equal(dep3$(), 'base1-dep0-dep1-dep2-dep3')
	equal(dep4$(), 'base1-dep0-dep1-dep2-dep3-dep4')
})
test('prevents diamond dependency problem 1', ()=>{
	const store$ = sig_(0)
	const values:string[] = []
	const a$ = memo_(()=>`a${store$()}`)
	const b$ = memo_(()=>a$().replace('a', 'b'))
	const c$ = memo_(()=>a$().replace('a', 'c'))
	const d$ = memo_(()=>a$().replace('a', 'd'))
	memo_(()=>`${b$()}${c$()}${d$()}`,
		combined$=>
			values.push(combined$())
	)()
	deepStrictEqual(values, ['b0c0d0'])
	store$._ = 1
	store$._ = 2
	deepStrictEqual(values, ['b0c0d0', 'b1c1d1', 'b2c2d2'])
})
test('prevents diamond dependency problem 2', ()=>{
	const store$ = sig_(0)
	const values:string[] = []
	const a$ = memo_(()=>`a${store$()}`)
	const b$ = memo_(()=>a$().replace('a', 'b'))
	const c$ = memo_(()=>b$().replace('b', 'c'))
	const d$ = memo_(()=>c$().replace('c', 'd'))
	const e$ = memo_(()=>d$().replace('d', 'e'))
	memo_<string>(
		()=>[a$(), e$()].join(''),
		$=>values.push($())
	)()
	deepStrictEqual(values, ['a0e0'])
	store$._ = 1
	deepStrictEqual(values, ['a0e0', 'a1e1'])
})
test('prevents diamond dependency problem 3', ()=>{
	const store$ = sig_(0)
	const values:string[] = []
	const a$ = memo_(()=>`a${store$()}`)
	const b$ = memo_(()=>a$().replace('a', 'b'))
	const c$ = memo_(()=>b$().replace('b', 'c'))
	const d$ = memo_(()=>c$().replace('c', 'd'))
	memo_<string>(
		()=>`${a$()}${b$()}${c$()}${d$()}`,
		combined$=>values.push(combined$())
	)()
	deepStrictEqual(values, ['a0b0c0d0'])
	store$._ = 1
	deepStrictEqual(values, ['a0b0c0d0', 'a1b1c1d1'])
})
test('autosubscribe: prevents diamond dependency problem 4 (complex)', ()=>{
	const store1$ = sig_(0)
	const store2$ = sig_(0)
	const values:string[] = []
	const a$ = memo_(()=>`a${store1$()}`)
	const b$ = memo_(()=>`b${store2$()}`)
	const c$ = memo_(()=>`c${a$()}${b$()}`)
	const d$ = memo_(()=>`d${a$()}`)
	const e$ = memo_(()=>`e${c$()}${d$()}`)
	const f$ = memo_(()=>`f${e$()}`)
	const g$ = memo_(()=>`g${f$()}`)
	memo_(
		()=>e$(),
		combined1$=>values.push(combined1$())
	)()
	memo_(
		()=>[e$(), g$()].join(''),
		combined2$=>values.push(combined2$())
	)()
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
	const firstName$ = sig_('John')
	const lastName$ = sig_('Doe')
	const fullName$ = memo_(()=>{
		events += 'full '
		return `${firstName$()} ${lastName$()}`
	})
	const isFirstShort$ = memo_(()=>{
		events += 'short '
		return firstName$().length < 10
	})
	const displayName$ = memo_(()=>{
		events += 'display '
		return isFirstShort$() ? fullName$() : firstName$()
	})
	equal(events, '')
	equal(displayName$(), 'John Doe')
	equal(events, 'display short full ')
	firstName$._ = 'Benedict'
	equal(displayName$(), 'Benedict Doe')
	equal(events, 'display short full short full display ')
	firstName$._ = 'Montgomery'
	equal(displayName$(), 'Montgomery')
	equal(events, 'display short full short full display short full display ')
})
test('prevents diamond dependency problem 6', ()=>{
	const store1$ = sig_(0)
	const store2$ = sig_(0)
	const values:string[] = []
	const a$ = memo_(()=>`a${store1$()}`)
	const b$ = memo_(()=>`b${store2$()}`)
	const c$ = memo_(()=>b$().replace('b', 'c'))
	memo_(
		()=>`${a$()}${c$()}`,
		combined$=>values.push(combined$())
	)()
	deepStrictEqual(values, ['a0c0'])
	store1$._ = 1
	deepStrictEqual(values, ['a0c0', 'a1c0'])
})
test('prevents dependency listeners from being out of order', ()=>{
	const base$ = sig_(0)
	const a$ = memo_(()=>{
		return `${base$()}a`
	})
	const values:string[] = []
	const b$ = memo_(()=>{
		return `${a$()}b`
	}, b$=>values.push(b$()))
	equal(b$(), '0ab')
	deepStrictEqual(values, ['0ab'])
	equal(a$(), '0a')
	base$._ = 1
	deepStrictEqual(values, ['0ab', '1ab'])
})
test('computes initial value when argument is undefined', ()=>{
	const one$ = sig_<string|undefined>(undefined)
	const two$ = memo_(()=>!!one$())
	equal(one$(), undefined)
	equal(two$(), false)
})
test.run()
