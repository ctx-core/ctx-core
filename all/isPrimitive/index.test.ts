import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { isPrimitive } from './index.js'
test('isPrimitive', ()=>{
	equal(isPrimitive(1), true)
	equal(isPrimitive('foo'), true)
	equal(isPrimitive(null), true)
	equal(isPrimitive(undefined), true)
	equal(isPrimitive(true), true)
	equal(isPrimitive(false), true)
	equal(isPrimitive(Symbol('foo')), true)
	equal(isPrimitive({}), false)
	equal(isPrimitive([]), false)
	equal(isPrimitive(()=>1), false)
	equal(isPrimitive(new Date), false)
})
test.run()