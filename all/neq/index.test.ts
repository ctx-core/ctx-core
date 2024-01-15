import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { neq, neq_ } from './index.js'
test('neq', ()=>{
	equal(neq([0, 0]), false)
	equal(neq([0, 1]), true)
	equal(neq([{}, {}]), true)
	equal(neq([undefined, {}]), true)
	equal(neq([undefined, null]), false)
	equal(neq([undefined, undefined]), false)
})
test('neq_', ()=>{
	equal(neq_(0)(0), false)
	equal(neq_(0)(1), true)
	equal(neq_({})({}), true)
	equal(neq_(undefined)({}), true)
	equal(neq_(undefined)(null), false)
	equal(neq_(undefined)(undefined), false)
})
test.run()
