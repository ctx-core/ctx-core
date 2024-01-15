import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { omit } from '../omit/index.js'
test('omit', ()=>{
	const o = {
		foo: 1,
		bar: 1,
		baz: 1,
	}
	equal(omit(o, 'bar', 'baz'), { foo: 1 })
})
test.run()
