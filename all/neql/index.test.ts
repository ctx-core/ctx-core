import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { neql, neql_ } from './index.js'
test('neql', ()=>{
	equal(neql([0, 0]), false)
	equal(neql([0, 1]), true)
	equal(neql([{}, {}]), true)
	equal(neql([undefined, {}]), true)
	equal(neql([undefined, null]), true)
	equal(neql([undefined, undefined]), false)
})
test('neql_', ()=>{
	equal(neql_(0)(0), false)
	equal(neql_(0)(1), true)
	equal(neql_({})({}), true)
	equal(neql_(undefined)({}), true)
	equal(neql_(undefined)(null), true)
	equal(neql_(undefined)(undefined), false)
})
test.run()
