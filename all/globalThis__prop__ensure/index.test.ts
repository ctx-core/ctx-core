import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { globalThis__prop__ensure } from '../globalThis__prop__ensure/index.js'
const test_fn_sym = Symbol.for('test_fn_sym')
test('globalThis__prop__ensure|string', ()=>{
	const test__globalThis = globalThis as test__globalThis_T
	equal(test__globalThis.test_fn_str, undefined)
	equal(
		globalThis__prop__ensure('test_fn_str', ()=>'test'),
		'test')
	equal(test__globalThis.test_fn_str, 'test')
})
test('globalThis__prop__ensure|symbol', ()=>{
	const test__globalThis = globalThis as test__globalThis_T
	equal(test__globalThis[test_fn_sym], undefined)
	equal(globalThis__prop__ensure(test_fn_sym, ()=>'test'), 'test')
	equal(test__globalThis[test_fn_sym], 'test')
})
type test__globalThis_T = typeof globalThis&{
	test_fn_str:string
	[test_fn_sym]:string
}
