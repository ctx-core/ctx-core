import { deepStrictEqual } from 'node:assert'
import { clock } from 'sinon'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { sleep } from '../sleep/index.js'
import { rememo_, rememo_T, signal_ } from './index.js'
test('rememo_|static value', ()=>{
	let count = 0
	let rememo$ = rememo_(rememo=>{
		count++
		return 'rememo-value'
	})
	equal(count, 0)
	equal(rememo$(), 'rememo-value')
	equal(count, 1)
	equal(rememo$(), 'rememo-value')
	equal(count, 1)
})
test('signal_', ()=>{
	let signal$ = signal_('val0')
	equal(signal$(), 'val0')
	signal$('val1')
	equal(signal$(), 'val1')
})
test('rememo_|def function|rememo$ argument', ()=>{
	let signal$ = signal_('val0')
	let rememo$:rememo_T<string>&{custom?:string} = rememo_<string>((_rememo$:rememo_T<string>&{custom?:string})=>
		`${_rememo$.custom}-${signal$()}`)
	rememo$.custom = 'custom_val0'
	equal(rememo$(), 'custom_val0-val0')
	rememo$.custom = 'custom_val1'
	equal(rememo$(), 'custom_val0-val0')
	signal$('val1')
	equal(rememo$(), 'custom_val1-val1')
})
test('signal_|async subsubscriber|case 1', async ()=>{
	let resolve:(user:{ id:string })=>void
	let user0 = { id: 'id-0' }
	let user1 = { id: 'id-1' }
	let id$ = signal_('id-0')
	let user$ = signal_<{ id:string }|null>(
		null,
		async (_user$)=>{
			id$()
			let user:{ id:string } = await new Promise(_resolve=>resolve = _resolve)
			_user$(user)
		})
	equal(user$(), null)
	resolve!(user0)
	await sleep(0)
	equal(user$(), user0)
	id$('id-1')
	equal(user$(), user0)
	resolve!(user1)
	await sleep(0)
})
test('signal_|async subsubscriber|case 2', async ()=>{
	let a$ = signal_(1)
	let b$ = signal_(2)
	let sleepCycles = 5
	let taskArgumentsCalls:number[][] = []
	let sum$ = signal_<null|number>(null,
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
test('rememo_+signal_|simple graph', ()=>{
	let base$ = signal_('base0')
	let dep0$ = rememo_(()=>base$() + '-dep0')
	let dep1$ = rememo_(()=>dep0$() + '-dep1')
	let dep2$ = rememo_(()=>dep1$() + '-dep2')
	let dep3$ = rememo_(()=>dep2$() + '-dep3')
	let dep4$ = rememo_(()=>dep3$() + '-dep4')
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
	let store$ = signal_(0)
	let values:string[] = []
	let a$ = rememo_(()=>`a${store$()}`)
	let b$ = rememo_(()=>a$().replace('a', 'b'))
	let c$ = rememo_(()=>a$().replace('a', 'c'))
	let d$ = rememo_(()=>a$().replace('a', 'd'))
	let combined$ = rememo_(()=>`${b$()}${c$()}${d$()}`,
		combined$=>
			values.push(combined$()))
	deepStrictEqual(values, ['b0c0d0'])
	store$(1)
	store$(2)
	deepStrictEqual(values, ['b0c0d0', 'b1c1d1', 'b2c2d2'])
})
test('prevents diamond dependency problem 2', ()=>{
	let store$ = signal_(0)
	let values:string[] = []
	let a$ = rememo_(()=>`a${store$()}`)
	let b$ = rememo_(()=>a$().replace('a', 'b'))
	let c$ = rememo_(()=>b$().replace('b', 'c'))
	let d$ = rememo_(()=>c$().replace('c', 'd'))
	let e$ = rememo_(()=>d$().replace('d', 'e'))
	let combined$ = rememo_<string>(
		()=>[a$(), e$()].join(''),
		combined$=>values.push(combined$()))
	deepStrictEqual(values, ['a0e0'])
	store$(1)
	deepStrictEqual(values, ['a0e0', 'a1e1'])
})
test('prevents diamond dependency problem 3', ()=>{
	let store$ = signal_(0)
	let values:string[] = []
	let a$ = rememo_(()=>`a${store$()}`)
	let b$ = rememo_(()=>a$().replace('a', 'b'))
	let c$ = rememo_(()=>b$().replace('b', 'c'))
	let d$ = rememo_(()=>c$().replace('c', 'd'))
	rememo_<string>(
		()=>`${a$()}${b$()}${c$()}${d$()}`,
		combined$=>values.push(combined$()))
	deepStrictEqual(values, ['a0b0c0d0'])
	store$(1)
	deepStrictEqual(values, ['a0b0c0d0', 'a1b1c1d1'])
})
test('autosubscribe: prevents diamond dependency problem 4 (complex)', ()=>{
	let store1$ = signal_(0)
	let store2$ = signal_(0)
	let values:string[] = []
	let fn =
		(name:string)=>
			(...v:(number|string)[])=>
				`${name}${v.join('')}`
	let a$ = rememo_(()=>`a${store1$()}`)
	let b$ = rememo_(()=>`b${store2$()}`)
	let c$ = rememo_(()=>`c${a$()}${b$()}`)
	let d$ = rememo_(()=>`d${a$()}`)
	let e$ = rememo_(()=>`e${c$()}${d$()}`)
	let f$ = rememo_(()=>`f${e$()}`)
	let g$ = rememo_(()=>`g${f$()}`)
	rememo_(
		()=>e$(),
		combined1$=>values.push(combined1$()))
	rememo_(
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
	let firstName$ = signal_('John')
	let lastName$ = signal_('Doe')
	let fullName$ = rememo_(()=>{
		events += 'full '
		return `${firstName$()} ${lastName$()}`
	})
	let isFirstShort$ = rememo_(()=>{
		events += 'short '
		return firstName$().length < 10
	})
	let displayName$ = rememo_(
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
	let store1$ = signal_(0)
	let store2$ = signal_(0)
	let values:string[] = []
	let a$ = rememo_(()=>`a${store1$()}`)
	let b$ = rememo_(()=>`b${store2$()}`)
	let c$ = rememo_(()=>b$().replace('b', 'c'))
	rememo_(
		()=>`${a$()}${c$()}`,
		combined$=>values.push(combined$()))
	deepStrictEqual(values, ['a0c0'])
	store1$(1)
	deepStrictEqual(values, ['a0c0', 'a1c0'])
})
test('prevents dependency listeners from being out of order', ()=>{
	let base$ = signal_(0)
	let a$ = rememo_(()=>{
		return `${base$()}a`
	})
	let values:string[] = []
	let b$ = rememo_(()=>{
		return `${a$()}b`
	}, b$=>values.push(b$()))
	equal(b$(), '0ab')
	deepStrictEqual(values, ['0ab'])
	equal(a$(), '0a')
	base$(1)
	deepStrictEqual(values, ['0ab', '1ab'])
})
test('computes initial value when argument is undefined', ()=>{
	let one$ = signal_<string|undefined>(undefined)
	let two$ = rememo_(()=>!!one$())
	equal(one$(), undefined)
	equal(two$(), false)
})
test.run()
