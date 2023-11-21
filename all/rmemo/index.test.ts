import { deepStrictEqual } from 'node:assert'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { sleep } from '../sleep/index.js'
import { r_rmemo_, type r_rmemo_T, rw_rmemo_ } from './index.js'
test('r_rmemo_|static value', ()=>{
	let count = 0
	const r_rmemo = r_rmemo_(()=>{
		count++
		return 'rmemo-value'
	})
	equal(count, 0)
	equal(r_rmemo(), 'rmemo-value')
	equal(count, 1)
	equal(r_rmemo(), 'rmemo-value')
	equal(count, 1)
})
test('rw_rmemo_', ()=>{
	const rw_rmemo = rw_rmemo_('val0')
	equal(rw_rmemo(), 'val0')
	rw_rmemo('val1')
	equal(rw_rmemo(), 'val1')
})
test('r_rmemo_|def function|rmemo$ argument', ()=>{
	const rw_rmemo = rw_rmemo_('val0')
	const r_rmemo:r_rmemo_T<string>&{custom?:string} = r_rmemo_<string>((_rmemo$:r_rmemo_T<string>&{custom?:string})=>
		`${_rmemo$.custom}-${rw_rmemo()}`)
	r_rmemo.custom = 'custom_val0'
	equal(r_rmemo(), 'custom_val0-val0')
	r_rmemo.custom = 'custom_val1'
	equal(r_rmemo(), 'custom_val0-val0')
	rw_rmemo('val1')
	equal(r_rmemo(), 'custom_val1-val1')
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
			id$()
			const user:{ id:string } = await new Promise(_resolve=>resolve = _resolve)
			_user$(user)
		})
	equal(count, 0)
	equal(user$(), null)
	equal(count, 1)
	resolve!(user0)
	await sleep(0)
	equal(count, 1)
	equal(user$(), user0)
	equal(count, 1)
	id$('id-1')
	equal(count, 2)
	equal(user$(), user0)
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
			taskArgumentsCalls.push([a$(), b$()])
			for (let i = 0; i < sleepCycles; i++) {
				await Promise.resolve()
			}
			sum$(a$() + b$())
		})
	equal(sum$(), null)
	deepStrictEqual(taskArgumentsCalls, [[1, 2]])
	a$(10)
	b$(20)
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
test('r_rmemo_+rw_rmemo_|simple graph', ()=>{
	const base$ = rw_rmemo_('base0')
	const dep0$ = r_rmemo_(()=>base$() + '-dep0')
	const dep1$ = r_rmemo_(()=>dep0$() + '-dep1')
	const dep2$ = r_rmemo_(()=>dep1$() + '-dep2')
	const dep3$ = r_rmemo_(()=>dep2$() + '-dep3')
	const dep4$ = r_rmemo_(()=>dep3$() + '-dep4')
	equal(dep4$(), 'base0-dep0-dep1-dep2-dep3-dep4')
	equal(dep3$(), 'base0-dep0-dep1-dep2-dep3')
	equal(dep2$(), 'base0-dep0-dep1-dep2')
	equal(dep1$(), 'base0-dep0-dep1')
	equal(dep0$(), 'base0-dep0')
	equal(base$(), 'base0')
	base$('base1')
	equal(base$(), 'base1')
	equal(dep0$(), 'base1-dep0')
	equal(dep1$(), 'base1-dep0-dep1')
	equal(dep2$(), 'base1-dep0-dep1-dep2')
	equal(dep3$(), 'base1-dep0-dep1-dep2-dep3')
	equal(dep4$(), 'base1-dep0-dep1-dep2-dep3-dep4')
})
test('prevents diamond dependency problem 1', ()=>{
	const store$ = rw_rmemo_(0)
	const values:string[] = []
	const a$ = r_rmemo_(()=>`a${store$()}`)
	const b$ = r_rmemo_(()=>a$().replace('a', 'b'))
	const c$ = r_rmemo_(()=>a$().replace('a', 'c'))
	const d$ = r_rmemo_(()=>a$().replace('a', 'd'))
	r_rmemo_(()=>`${b$()}${c$()}${d$()}`,
		combined$=>
			values.push(combined$())
	).go()
	deepStrictEqual(values, ['b0c0d0'])
	store$(1)
	store$(2)
	deepStrictEqual(values, ['b0c0d0', 'b1c1d1', 'b2c2d2'])
})
test('prevents diamond dependency problem 2', ()=>{
	const store$ = rw_rmemo_(0)
	const values:string[] = []
	const a$ = r_rmemo_(()=>`a${store$()}`)
	const b$ = r_rmemo_(()=>a$().replace('a', 'b'))
	const c$ = r_rmemo_(()=>b$().replace('b', 'c'))
	const d$ = r_rmemo_(()=>c$().replace('c', 'd'))
	const e$ = r_rmemo_(()=>d$().replace('d', 'e'))
	r_rmemo_<string>(
		()=>[a$(), e$()].join(''),
		combined$=>values.push(combined$())
	).go()
	deepStrictEqual(values, ['a0e0'])
	store$(1)
	deepStrictEqual(values, ['a0e0', 'a1e1'])
})
test('prevents diamond dependency problem 3', ()=>{
	const store$ = rw_rmemo_(0)
	const values:string[] = []
	const a$ = r_rmemo_(()=>`a${store$()}`)
	const b$ = r_rmemo_(()=>a$().replace('a', 'b'))
	const c$ = r_rmemo_(()=>b$().replace('b', 'c'))
	const d$ = r_rmemo_(()=>c$().replace('c', 'd'))
	r_rmemo_<string>(
		()=>`${a$()}${b$()}${c$()}${d$()}`,
		combined$=>values.push(combined$())
	).go()
	deepStrictEqual(values, ['a0b0c0d0'])
	store$(1)
	deepStrictEqual(values, ['a0b0c0d0', 'a1b1c1d1'])
})
test('autosubscribe: prevents diamond dependency problem 4 (complex)', ()=>{
	const store1$ = rw_rmemo_(0)
	const store2$ = rw_rmemo_(0)
	const values:string[] = []
	const a$ = r_rmemo_(()=>`a${store1$()}`)
	const b$ = r_rmemo_(()=>`b${store2$()}`)
	const c$ = r_rmemo_(()=>`c${a$()}${b$()}`)
	const d$ = r_rmemo_(()=>`d${a$()}`)
	const e$ = r_rmemo_(()=>`e${c$()}${d$()}`)
	const f$ = r_rmemo_(()=>`f${e$()}`)
	const g$ = r_rmemo_(()=>`g${f$()}`)
	r_rmemo_(
		()=>e$(),
		combined1$=>values.push(combined1$())
	).go()
	r_rmemo_(
		()=>[e$(), g$()].join(''),
		combined2$=>values.push(combined2$())
	).go()
	deepStrictEqual(values, ['eca0b0da0', 'eca0b0da0gfeca0b0da0'])
	store1$(1)
	store2$(2)
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
		return `${firstName$()} ${lastName$()}`
	})
	const isFirstShort$ = r_rmemo_(()=>{
		events += 'short '
		return firstName$().length < 10
	})
	const displayName$ = r_rmemo_(
		()=>{
			events += 'display '
			return isFirstShort$() ? fullName$() : firstName$()
		}
	)
	equal(events, '')
	equal(displayName$(), 'John Doe')
	equal(events, 'display short full ')
	firstName$('Benedict')
	equal(displayName$(), 'Benedict Doe')
	equal(events, 'display short full short full display ')
	firstName$('Montgomery')
	equal(displayName$(), 'Montgomery')
	equal(events, 'display short full short full display short full display ')
})
test('prevents diamond dependency problem 6', ()=>{
	const store1$ = rw_rmemo_(0)
	const store2$ = rw_rmemo_(0)
	const values:string[] = []
	const a$ = r_rmemo_(()=>`a${store1$()}`)
	const b$ = r_rmemo_(()=>`b${store2$()}`)
	const c$ = r_rmemo_(()=>b$().replace('b', 'c'))
	r_rmemo_(
		()=>`${a$()}${c$()}`,
		combined$=>values.push(combined$())
	).go()
	deepStrictEqual(values, ['a0c0'])
	store1$(1)
	deepStrictEqual(values, ['a0c0', 'a1c0'])
})
test('prevents dependency listeners from being out of order', ()=>{
	const base$ = rw_rmemo_(0)
	const a$ = r_rmemo_(()=>{
		return `${base$()}a`
	})
	const values:string[] = []
	const b$ = r_rmemo_(()=>{
		return `${a$()}b`
	}, b$=>values.push(b$()))
	equal(b$(), '0ab')
	deepStrictEqual(values, ['0ab'])
	equal(a$(), '0a')
	base$(1)
	deepStrictEqual(values, ['0ab', '1ab'])
})
test('computes initial value when argument is undefined', ()=>{
	const one$ = rw_rmemo_<string|undefined>(undefined)
	const two$ = r_rmemo_(()=>!!one$())
	equal(one$(), undefined)
	equal(two$(), false)
})
test.run()
