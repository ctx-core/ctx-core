import { test } from 'uvu'
import { is } from 'uvu/assert'
import { I } from '../combinators/index.js'
test('I', ()=>{
	const obj = {}
	is(obj, I(obj))
})
test.run()