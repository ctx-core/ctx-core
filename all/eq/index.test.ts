import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { eq, eq_ } from './index.js'
test('eq', ()=>{
	equal(eq([0, 0]), true)
	equal(eq([0, 1]), false)
	equal(eq([{}, {}]), false)
	equal(eq([undefined, {}]), false)
	equal(eq([undefined, null]), true)
	equal(eq([undefined, undefined]), true)
})
test('eq_', ()=>{
	equal(eq_(0)(0), true)
	equal(eq_(0)(1), false)
	equal(eq_({})({}), false)
	equal(eq_(undefined)({}), false)
	equal(eq_(undefined)(null), true)
	equal(eq_(undefined)(undefined), true)
})
test.run()
