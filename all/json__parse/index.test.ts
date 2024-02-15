import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { json__parse } from './index.js'
test('json__parse', ()=>{
	const _error = console.error
	try {
		const err_arg_aa:Error[][] = []
		console.error = (...arg_a)=>err_arg_aa.push(arg_a)
		equal(json__parse(undefined), undefined)
		equal(json__parse(null), null)
		equal(json__parse('bad{json'), null)
		equal(json__parse(JSON.stringify({ foo: 'bar', baz: 1 })), { foo: 'bar', baz: 1 })
		equal(err_arg_aa[0][0].name, 'SyntaxError')
		equal(err_arg_aa[0][0].message, `Unexpected token 'b', "bad{json" is not valid JSON`)
	} finally {
		console.error = _error
	}
})
test.run()
