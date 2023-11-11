import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { promise_o_ } from '../promise_o/index.js'
import { queue_ } from '../queue/index.js'
import { run } from '../run/index.js'
import { tick } from '../tick/index.js'
test('queue_(1).add|queue length of 1 at a time', async ()=>{
	const queue = queue_(1)
	const promise_o_a = [promise_o_(), promise_o_(), promise_o_()]
	const ret_a:any[] = [null, null, null]
	queue.add(()=>promise_o_a[0].promise).then(ret=>ret_a[0] = ret)
	queue.add(()=>promise_o_a[1].promise).then(ret=>ret_a[1] = ret)
	queue.add(()=>promise_o_a[2].promise).then(ret=>ret_a[2] = ret)
	equal(ret_a, [null, null, null])
	promise_o_a[1].resolve('val1')
	await tick()
	equal(ret_a, [null, null, null])
	promise_o_a[0].resolve('val0')
	await tick()
	equal(ret_a, ['val0', null, null])
	await tick()
	equal(ret_a, ['val0', 'val1', null])
	promise_o_a[2].resolve('val2')
	await tick()
	equal(ret_a, ['val0', 'val1', 'val2'])
	const close__promise__arg_aa:any[][] = []
	queue.close()
	.then((...arg_a)=>
		close__promise__arg_aa.push(arg_a))
	await tick()
	equal(close__promise__arg_aa, [[3]])
})
test('queue_(2).add|queue length of 2 at a time', async ()=>{
	const queue = queue_(2)
	const promise_o_a = [promise_o_(), promise_o_(), promise_o_(), promise_o_()]
	const ret_a:any[] = [null, null, null, null]
	queue.add(()=>promise_o_a[0].promise).then(ret=>ret_a[0] = ret)
	queue.add(()=>promise_o_a[1].promise).then(ret=>ret_a[1] = ret)
	queue.add(()=>promise_o_a[2].promise).then(ret=>ret_a[2] = ret)
	queue.add(()=>promise_o_a[3].promise).then(ret=>ret_a[3] = ret)
	equal(ret_a, [null, null, null, null])
	promise_o_a[2].resolve('val2')
	await tick()
	equal(ret_a, [null, null, null, null])
	promise_o_a[3].resolve('val3')
	await tick()
	equal(ret_a, [null, null, null, null])
	promise_o_a[0].resolve('val0')
	await tick()
	equal(ret_a, ['val0', null, null, null])
	await tick()
	equal(ret_a, ['val0', null, 'val2', null])
	await tick()
	equal(ret_a, ['val0', null, 'val2', 'val3'])
	promise_o_a[1].resolve('val1')
	await tick()
	equal(ret_a, ['val0', 'val1', 'val2', 'val3'])
	const close__promise__arg_aa:any[][] = []
	queue.close()
	.then((...arg_a)=>
		close__promise__arg_aa.push(arg_a))
	await tick()
	equal(close__promise__arg_aa, [[4]])
})
test('queue_(1).add_sync|queue length of 1 at a time', async ()=>{
	const queue = queue_(1)
	const promise_o_a = [promise_o_(), promise_o_(), promise_o_()]
	const ret_a:any[] = [null, null, null]
	ret_a[0] = queue.add_sync(()=>promise_o_a[0].promise)
	equal(ret_a, [1, null, null])
	ret_a[1] = queue.add_sync(()=>promise_o_a[1].promise)
	equal(ret_a, [1, 2, null])
	ret_a[2] = queue.add_sync(()=>promise_o_a[2].promise)
	equal(ret_a, [1, 2, 3])
})
test('queue_(2).add_sync|queue length of 2 at a time', async ()=>{
	const queue = queue_(2)
	const promise_o_a = [promise_o_(), promise_o_(), promise_o_(), promise_o_()]
	const ret_a:any[] = [null, null, null, null]
	ret_a[0] = queue.add_sync(()=>promise_o_a[0].promise)
	equal(ret_a, [1, null, null, null])
	ret_a[1] = queue.add_sync(()=>promise_o_a[1].promise)
	equal(ret_a, [1, 2, null, null])
	ret_a[2] = queue.add_sync(()=>promise_o_a[2].promise)
	equal(ret_a, [1, 2, 3, null])
	ret_a[3] = queue.add_sync(()=>promise_o_a[3].promise)
	equal(ret_a, [1, 2, 3, 4])
})
test('queue_(2).cancel|immediately stops queue discarding pending jobs|returns pending count', async ()=>{
	const queue = queue_(2)
	let pending:number|undefined = undefined
	const promise_o_a = [
		promise_o_(),
		run(()=>{
			const promise_o = promise_o_()
			promise_o.promise.then($=>{
				pending = queue.cancel()
				return $
			})
			return promise_o
		}),
		promise_o_(),
		promise_o_()
	]
	const ret_a:any[] = [null, null, null, null]
	queue.add(()=>promise_o_a[0].promise).then(ret=>ret_a[0] = ret)
	queue.add(()=>promise_o_a[1].promise).then(ret=>ret_a[1] = ret)
	queue.add(()=>promise_o_a[2].promise).then(ret=>ret_a[2] = ret)
	queue.add(()=>promise_o_a[3].promise).then(ret=>ret_a[3] = ret)
	const close__promise__arg_aa:any[][] = []
	queue.close()
	.then((...arg_a)=>
		close__promise__arg_aa.push(arg_a))
	equal(ret_a, [null, null, null, null])
	equal(pending, undefined)
	equal(close__promise__arg_aa, [])
	promise_o_a[2].resolve('val2')
	await tick()
	equal(ret_a, [null, null, null, null])
	equal(pending, undefined)
	equal(close__promise__arg_aa, [])
	promise_o_a[3].resolve('val3')
	await tick()
	equal(ret_a, [null, null, null, null])
	equal(pending, undefined)
	equal(close__promise__arg_aa, [])
	promise_o_a[1].resolve('val1')
	await tick()
	equal(ret_a, [null, null, null, null])
	equal(pending, 2)
	equal(close__promise__arg_aa, [[0]])
})
test('throttle|number', async ()=>{
	const queue = queue_(2)
	const promise_o_a = [promise_o_(), promise_o_(), promise_o_(), promise_o_(), promise_o_()]
	promise_o_a.map(pending_o=>queue.add(()=>pending_o.promise))
	const pending__wait__arg_aa:any[][] = []
	const throttle__then = (...arg_a:any[])=>{
		pending__wait__arg_aa.push(arg_a)
	}
	queue.throttle(5)
	.then(throttle__then)
	await tick()
	equal(pending__wait__arg_aa, [[5]])
	queue.throttle(3)
	.then(throttle__then)
	await tick()
	equal(pending__wait__arg_aa, [[5]])
	promise_o_a[0].resolve(true)
	await tick()
	await tick()
	equal(pending__wait__arg_aa, [[5]])
	promise_o_a[1].resolve(true)
	await tick()
	await tick()
	equal(pending__wait__arg_aa, [[5], [3]])
})
test('throttle|fn', async ()=>{
	const queue = queue_(2)
	const promise_o_a = [promise_o_(), promise_o_(), promise_o_(), promise_o_(), promise_o_()]
	promise_o_a.map(pending_o=>queue.add(()=>pending_o.promise))
	const pending__wait__arg_aa:any[][] = []
	const throttle__then = (...arg_a:any[])=>{
		pending__wait__arg_aa.push(arg_a)
	}
	queue.throttle(item_count=>
		item_count <= 5
	).then(throttle__then)
	await tick()
	equal(pending__wait__arg_aa, [[5]])
	queue.throttle(item_count=>
		item_count <= 3
	).then(throttle__then)
	await tick()
	equal(pending__wait__arg_aa, [[5]])
	promise_o_a[0].resolve(true)
	await tick()
	await tick()
	equal(pending__wait__arg_aa, [[5]])
	promise_o_a[1].resolve(true)
	await tick()
	await tick()
	equal(pending__wait__arg_aa, [[5], [3]])
})
test('pending', async ()=>{
	const queue = queue_(2)
	const promise_o_a = [promise_o_(), promise_o_(), promise_o_()]
	equal(queue.pending, 0)
	queue.add(()=>promise_o_a[0].promise).then()
	equal(queue.pending, 1)
	queue.add(()=>promise_o_a[1].promise).then()
	equal(queue.pending, 2)
	queue.add(()=>promise_o_a[2].promise).then()
	equal(queue.pending, 2)
})
test('item_count', async ()=>{
	const queue = queue_(2)
	const promise_o_a = [promise_o_(), promise_o_(), promise_o_()]
	equal(queue.item_count, 0)
	queue.add(()=>promise_o_a[0].promise).then()
	equal(queue.item_count, 1)
	queue.add(()=>promise_o_a[1].promise).then()
	equal(queue.item_count, 2)
	queue.add(()=>promise_o_a[2].promise).then()
	equal(queue.item_count, 3)
})
test.run()
