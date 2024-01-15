import { test } from 'uvu'
import { is } from 'uvu/assert'
import { and } from '../and/index.js'
test('and', ()=>{
	const obj = { obj: 1 }
	const obj2 = { obj2: 1 }
	const obj3 = { obj3: 1 }
	is(obj3, and([obj, obj2, obj3]))
})
test.run()
