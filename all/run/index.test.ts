import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { run } from './index.js'
test('run|fn first', ()=>{
	equal(run(()=>1), 1)
	equal(
		run((a, b, c)=>[a, b, c],
			0, 1, 2),
		[0, 1, 2])
})
test('run|arg_a first', ()=>{
	equal(run([], ()=>1), 1)
	equal(
		run(
			[0, 1, 2],
			(a, b, c)=>[a, b, c]),
		[0, 1, 2])
})
test.run()
