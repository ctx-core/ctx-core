import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { debounce_mapreduce } from '../debounce_mapreduce/index.js'
import { eql_a_ } from '../eql_a/index.js'
test('debounce_mapreduce: match', async ()=>{
	const arg_ = ()=>[0, 1, 2]
	let reduce_called = false
	await debounce_mapreduce(
		arg_,
		async $a=>$a[0] + $a[1] + $a[2],
		(v0, v1)=>eql_a_(v0, v1),
		()=>reduce_called = true)
	equal(reduce_called, true)
})
test('debounce_mapreduce: no match', async ()=>{
	const arg_aa = [[0, 1, 2], [0, 1, 3]]
	const arg_ = ()=>arg_aa.shift() as number[]
	let reduce_called = false
	await debounce_mapreduce(
		arg_,
		async $a=>$a[0] + $a[1] + $a[2],
		(v0, v1)=>eql_a_(v0, v1),
		()=>reduce_called = true)
	equal(reduce_called, false)
})
test.run()
