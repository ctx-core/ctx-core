import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { add } from '../add/index.js'
test('add|value', ()=>{
	equal(add([2, 1, 3, 0]), 6)
	equal(add([2, 1, 3, null]), 6)
	equal(add([NaN, NaN]), NaN)
	equal(add([1, NaN]), NaN)
	equal(add([null, null, null, null]), null)
	equal(add([undefined, undefined]), null)
	equal(add(null), null)
	equal(add(undefined), null)
})
test.run()
