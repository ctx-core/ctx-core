import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { batch_queue_ } from '../batch_queue/index.js'
import { promise_o_ } from '../promise_o/index.js'
test('batch_queue_(1).add|enqueue 1 at a time & run 1 at a time', async ()=>{
	const batch_queue = batch_queue_(1)
	const promise_o_a = [promise_o_(), promise_o_(), promise_o_()]
	const fn_a = [()=>promise_o_a[0].promise, ()=>promise_o_a[1].promise, ()=>promise_o_a[2].promise]
	const ret0_a:unknown[] = [null, null, null]
	const ret1_a:unknown[] = [null, null, null]
	batch_queue.add(fn_a[0])
		.then(([ret0, ret1_p])=>{
			ret0_a[0] = ret0
			ret1_p.then(ret0=>ret1_a[0] = ret0)
		})
	batch_queue.add(fn_a[1])
		.then(([ret0, ret1_p])=>{
			ret0_a[1] = ret0
			ret1_p.then(ret1=>ret1_a[1] = ret1)
		})
	batch_queue.add(fn_a[2])
		.then(([ret0, ret1_p])=>{
			ret0_a[2] = ret0
			ret1_p.then(ret1=>ret1_a[2] = ret1)
		})
	equal(ret0_a, [null, null, null])
	equal(ret1_a, [null, null, null])
	await new Promise(res=>queueMicrotask(()=>res(null)))
	await new Promise(res=>queueMicrotask(()=>res(null)))
	equal(ret0_a, [fn_a[0], null, null])
	equal(ret1_a, [null, null, null])
	promise_o_a[1].resolve('val1')
	await new Promise(res=>queueMicrotask(()=>res(null)))
	equal(ret0_a, [fn_a[0], null, null])
	equal(ret1_a, [null, null, null])
	promise_o_a[0].resolve('val0')
	await new Promise(res=>queueMicrotask(()=>res(null)))
	equal(ret0_a, [fn_a[0], null, null])
	equal(ret1_a, [null, null, null])
	await new Promise(res=>queueMicrotask(()=>res(null)))
	equal(ret0_a, [fn_a[0], fn_a[1], null])
	equal(ret1_a, ['val0', null, null])
	await new Promise(res=>queueMicrotask(()=>res(null)))
	equal(ret0_a, [fn_a[0], fn_a[1], fn_a[2]])
	equal(ret1_a, ['val0', 'val1', null])
	promise_o_a[2].resolve('val2')
	await new Promise(res=>queueMicrotask(()=>res(null)))
	equal(ret0_a, [fn_a[0], fn_a[1], fn_a[2]])
	equal(ret1_a, ['val0', 'val1', null])
	await new Promise(res=>queueMicrotask(()=>res(null)))
	equal(ret0_a, [fn_a[0], fn_a[1], fn_a[2]])
	equal(ret1_a, ['val0', 'val1', 'val2'])
})
test('batch_queue_(1, 2).add|enqueue 2 at a time & run 1 at a time', async ()=>{
	const batch_queue = batch_queue_(1, 2)
	const promise_o_a = [promise_o_(), promise_o_(), promise_o_()]
	const fn_a = [()=>promise_o_a[0].promise, ()=>promise_o_a[1].promise, ()=>promise_o_a[2].promise]
	const ret0_a:unknown[] = [null, null, null]
	const ret1_a:unknown[] = [null, null, null]
	batch_queue.add(fn_a[0])
		.then(([ret0, ret1_p])=>{
			ret0_a[0] = ret0
			ret1_p.then(ret0=>ret1_a[0] = ret0)
		})
	batch_queue.add(fn_a[1])
		.then(([ret0, ret1_p])=>{
			ret0_a[1] = ret0
			ret1_p.then(ret1=>ret1_a[1] = ret1)
		})
	batch_queue.add(fn_a[2])
		.then(([ret0, ret1_p])=>{
			ret0_a[2] = ret0
			ret1_p.then(ret1=>ret1_a[2] = ret1)
		})
	equal(ret0_a, [null, null, null])
	equal(ret1_a, [null, null, null])
	await new Promise(res=>queueMicrotask(()=>res(null)))
	await new Promise(res=>queueMicrotask(()=>res(null)))
	equal(ret0_a, [fn_a[0], fn_a[1], null])
	equal(ret1_a, [null, null, null])
	promise_o_a[1].resolve('val1')
	await new Promise(res=>queueMicrotask(()=>res(null)))
	equal(ret0_a, [fn_a[0], fn_a[1], null])
	equal(ret1_a, [null, null, null])
	promise_o_a[0].resolve('val0')
	await new Promise(res=>queueMicrotask(()=>res(null)))
	equal(ret0_a, [fn_a[0], fn_a[1], null])
	equal(ret1_a, [null, null, null])
	await new Promise(res=>queueMicrotask(()=>res(null)))
	equal(ret0_a, [fn_a[0], fn_a[1], fn_a[2]])
	equal(ret1_a, ['val0', null, null])
	await new Promise(res=>queueMicrotask(()=>res(null)))
	equal(ret0_a, [fn_a[0], fn_a[1], fn_a[2]])
	equal(ret1_a, ['val0', 'val1', null])
	promise_o_a[2].resolve('val2')
	await new Promise(res=>queueMicrotask(()=>res(null)))
	equal(ret0_a, [fn_a[0], fn_a[1], fn_a[2]])
	equal(ret1_a, ['val0', 'val1', null])
	await new Promise(res=>queueMicrotask(()=>res(null)))
	equal(ret0_a, [fn_a[0], fn_a[1], fn_a[2]])
	equal(ret1_a, ['val0', 'val1', 'val2'])
})
test('batch_queue_(2).add|enqueue 2 at a time & run 2 at a time', async ()=>{
	const batch_queue = batch_queue_(2)
	const promise_o_a = [promise_o_(), promise_o_(), promise_o_()]
	const fn_a = [()=>promise_o_a[0].promise, ()=>promise_o_a[1].promise, ()=>promise_o_a[2].promise]
	const ret0_a:unknown[] = [null, null, null]
	const ret1_a:unknown[] = [null, null, null]
	batch_queue.add(fn_a[0])
		.then(([ret0, ret1_p])=>{
			ret0_a[0] = ret0
			ret1_p.then(ret0=>ret1_a[0] = ret0)
		})
	batch_queue.add(fn_a[1])
		.then(([ret0, ret1_p])=>{
			ret0_a[1] = ret0
			ret1_p.then(ret1=>ret1_a[1] = ret1)
		})
	batch_queue.add(fn_a[2])
		.then(([ret0, ret1_p])=>{
			ret0_a[2] = ret0
			ret1_p.then(ret1=>ret1_a[2] = ret1)
		})
	equal(ret0_a, [null, null, null])
	equal(ret1_a, [null, null, null])
	await new Promise(res=>queueMicrotask(()=>res(null)))
	await new Promise(res=>queueMicrotask(()=>res(null)))
	equal(ret0_a, [fn_a[0], fn_a[1], null])
	equal(ret1_a, [null, null, null])
	promise_o_a[1].resolve('val1')
	await new Promise(res=>queueMicrotask(()=>res(null)))
	equal(ret0_a, [fn_a[0], fn_a[1], null])
	equal(ret1_a, [null, null, null])
	promise_o_a[0].resolve('val0')
	await new Promise(res=>queueMicrotask(()=>res(null)))
	equal(ret0_a, [fn_a[0], fn_a[1], fn_a[2]])
	equal(ret1_a, [null, 'val1', null])
	await new Promise(res=>queueMicrotask(()=>res(null)))
	equal(ret0_a, [fn_a[0], fn_a[1], fn_a[2]])
	equal(ret1_a, ['val0', 'val1', null])
	promise_o_a[2].resolve('val2')
	await new Promise(res=>queueMicrotask(()=>res(null)))
	equal(ret0_a, [fn_a[0], fn_a[1], fn_a[2]])
	equal(ret1_a, ['val0', 'val1', null])
	await new Promise(res=>queueMicrotask(()=>res(null)))
	equal(ret0_a, [fn_a[0], fn_a[1], fn_a[2]])
	equal(ret1_a, ['val0', 'val1', 'val2'])
})
test.run()
