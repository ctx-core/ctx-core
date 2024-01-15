import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { eql, eql_ } from './index.js'
test('eql', ()=>{
	equal(eql([0, 0]), true)
	equal(eql([0, 1]), false)
	equal(eql([{}, {}]), false)
	equal(eql([undefined, {}]), false)
	equal(eql([undefined, null]), false)
	equal(eql([undefined, undefined]), true)
})
test('eql_', ()=>{
	equal(eql_(0)(0), true)
	equal(eql_(0)(1), false)
	equal(eql_({})({}), false)
	equal(eql_(undefined)({}), false)
	equal(eql_(undefined)(null), false)
	equal(eql_(undefined)(undefined), true)
})
test.run()
