import { deepStrictEqual } from 'node:assert'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { sleep } from '../sleep/index.js'
import { rmemo_, rmemo_T, rsig_ } from './index.js'
test('rmemo_|static value', ()=>{
	let count = 0
	let rmemo$ = rmemo_(rmemo=>{
		count++
		return 'rmemo-value'
	})
	equal(count, 0)
	equal(rmemo$(), 'rmemo-value')
	equal(count, 1)
	equal(rmemo$(), 'rmemo-value')
	equal(count, 1)
})
test('rsig_', ()=>{
	let rsig$ = rsig_('val0')
	equal(rsig$(), 'val0')
	rsig$('val1')
	equal(rsig$(), 'val1')
})
test('rmemo_|def function|rmemo$ argument', ()=>{
	let rsig$ = rsig_('val0')
	let rmemo$:rmemo_T<string>&{custom?:string} = rmemo_<string>((_rmemo$:rmemo_T<string>&{custom?:string})=>
		`${_rmemo$.custom}-${rsig$()}`)
	rmemo$.custom = 'custom_val0'
	equal(rmemo$(), 'custom_val0-val0')
	rmemo$.custom = 'custom_val1'
	equal(rmemo$(), 'custom_val0-val0')
	rsig$('val1')
	equal(rmemo$(), 'custom_val1-val1')
})
test('rsig_|async subsubscriber|case 1', async ()=>{
	let resolve:(user:{ id:string })=>void
	let user0 = { id: 'id-0' }
	let user1 = { id: 'id-1' }
	let id$ = rsig_('id-0')
	let call_count = 0
	let user$ = rsig_<{ id:string }|null>(
		null,
		async (_user$)=>{
			call_count++
			id$()
			let user:{ id:string } = await new Promise(_resolve=>resolve = _resolve)
			_user$(user)
		})
	// equal(call_count, 0)
	equal(user$(), null)
	equal(call_count, 1)
	resolve!(user0)
	await sleep(0)
	equal(call_count, 1)
	equal(user$(), user0)
	equal(call_count, 1)
	id$('id-1')
	equal(call_count, 2)
	equal(user$(), user0)
	resolve!(user1)
	await sleep(0)
	equal(call_count, 2)
})
test('rsig_|async subsubscriber|case 2', async ()=>{
	let a$ = rsig_(1)
	let b$ = rsig_(2)
	let sleepCycles = 5
	let taskArgumentsCalls:number[][] = []
	let sum$ = rsig_<null|number>(null,
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
test('rmemo_+rsig_|simple graph', ()=>{
	let base$ = rsig_('base0')
	let dep0$ = rmemo_(()=>base$() + '-dep0')
	let dep1$ = rmemo_(()=>dep0$() + '-dep1')
	let dep2$ = rmemo_(()=>dep1$() + '-dep2')
	let dep3$ = rmemo_(()=>dep2$() + '-dep3')
	let dep4$ = rmemo_(()=>dep3$() + '-dep4')
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
	let store$ = rsig_(0)
	let values:string[] = []
	let a$ = rmemo_(()=>`a${store$()}`)
	let b$ = rmemo_(()=>a$().replace('a', 'b'))
	let c$ = rmemo_(()=>a$().replace('a', 'c'))
	let d$ = rmemo_(()=>a$().replace('a', 'd'))
	let combined$ = rmemo_(()=>`${b$()}${c$()}${d$()}`,
		combined$=>
			values.push(combined$()))
	deepStrictEqual(values, ['b0c0d0'])
	store$(1)
	store$(2)
	deepStrictEqual(values, ['b0c0d0', 'b1c1d1', 'b2c2d2'])
})
test('prevents diamond dependency problem 2', ()=>{
	let store$ = rsig_(0)
	let values:string[] = []
	let a$ = rmemo_(()=>`a${store$()}`)
	let b$ = rmemo_(()=>a$().replace('a', 'b'))
	let c$ = rmemo_(()=>b$().replace('b', 'c'))
	let d$ = rmemo_(()=>c$().replace('c', 'd'))
	let e$ = rmemo_(()=>d$().replace('d', 'e'))
	let combined$ = rmemo_<string>(
		()=>[a$(), e$()].join(''),
		combined$=>values.push(combined$()))
	deepStrictEqual(values, ['a0e0'])
	store$(1)
	deepStrictEqual(values, ['a0e0', 'a1e1'])
})
test('prevents diamond dependency problem 3', ()=>{
	let store$ = rsig_(0)
	let values:string[] = []
	let a$ = rmemo_(()=>`a${store$()}`)
	let b$ = rmemo_(()=>a$().replace('a', 'b'))
	let c$ = rmemo_(()=>b$().replace('b', 'c'))
	let d$ = rmemo_(()=>c$().replace('c', 'd'))
	rmemo_<string>(
		()=>`${a$()}${b$()}${c$()}${d$()}`,
		combined$=>values.push(combined$()))
	deepStrictEqual(values, ['a0b0c0d0'])
	store$(1)
	deepStrictEqual(values, ['a0b0c0d0', 'a1b1c1d1'])
})
test('autosubscribe: prevents diamond dependency problem 4 (complex)', ()=>{
	let store1$ = rsig_(0)
	let store2$ = rsig_(0)
	let values:string[] = []
	let fn =
		(name:string)=>
			(...v:(number|string)[])=>
				`${name}${v.join('')}`
	let a$ = rmemo_(()=>`a${store1$()}`)
	let b$ = rmemo_(()=>`b${store2$()}`)
	let c$ = rmemo_(()=>`c${a$()}${b$()}`)
	let d$ = rmemo_(()=>`d${a$()}`)
	let e$ = rmemo_(()=>`e${c$()}${d$()}`)
	let f$ = rmemo_(()=>`f${e$()}`)
	let g$ = rmemo_(()=>`g${f$()}`)
	rmemo_(
		()=>e$(),
		combined1$=>values.push(combined1$()))
	rmemo_(
		()=>[e$(), g$()].join(''),
		combined2$=>values.push(combined2$()))
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
	let firstName$ = rsig_('John')
	let lastName$ = rsig_('Doe')
	let fullName$ = rmemo_(()=>{
		events += 'full '
		return `${firstName$()} ${lastName$()}`
	})
	let isFirstShort$ = rmemo_(()=>{
		events += 'short '
		return firstName$().length < 10
	})
	let displayName$ = rmemo_(
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
	let store1$ = rsig_(0)
	let store2$ = rsig_(0)
	let values:string[] = []
	let a$ = rmemo_(()=>`a${store1$()}`)
	let b$ = rmemo_(()=>`b${store2$()}`)
	let c$ = rmemo_(()=>b$().replace('b', 'c'))
	rmemo_(
		()=>`${a$()}${c$()}`,
		combined$=>values.push(combined$()))
	deepStrictEqual(values, ['a0c0'])
	store1$(1)
	deepStrictEqual(values, ['a0c0', 'a1c0'])
})
test('prevents dependency listeners from being out of order', ()=>{
	let base$ = rsig_(0)
	let a$ = rmemo_(()=>{
		return `${base$()}a`
	})
	let values:string[] = []
	let b$ = rmemo_(()=>{
		return `${a$()}b`
	}, b$=>values.push(b$()))
	equal(b$(), '0ab')
	deepStrictEqual(values, ['0ab'])
	equal(a$(), '0a')
	base$(1)
	deepStrictEqual(values, ['0ab', '1ab'])
})
test('computes initial value when argument is undefined', ()=>{
	let one$ = rsig_<string|undefined>(undefined)
	let two$ = rmemo_(()=>!!one$())
	equal(one$(), undefined)
	equal(two$(), false)
})
test.run()
