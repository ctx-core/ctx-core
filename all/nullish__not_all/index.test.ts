import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { nullish__not_all_ } from '../nullish__not_all/index.js'
test('nullish__not_all_|-onnullish', ()=>{
	const arg_aa:any[][] = []
	const _ = (...arg_a:any[])=>{
		arg_aa.push(arg_a)
		return arg_a
	}
	const undefined_val = undefined
	const null_val = null
	const zero = 0
	const str = ''
	const o = {}
	equal(nullish__not_all_([undefined_val], _),
		undefined)
	equal(arg_aa, [])
	equal(nullish__not_all_([undefined_val, null_val], _),
		null)
	equal(arg_aa, [])
	equal(nullish__not_all_([null_val, zero], _),
		[null, zero])
	equal(arg_aa, [[null, zero]])
	equal(nullish__not_all_([undefined_val, str], _),
		[undefined, str])
	equal(arg_aa, [[null, zero], [undefined, str]])
	equal(nullish__not_all_([null, undefined, o], _),
		[null, undefined, o])
	equal(arg_aa, [[null, zero], [undefined, str],
		[null, undefined, o]
	])
})
test('nullish__not_all_|+onnullish', ()=>{
	const arg_aa:any[][] = []
	const _ = (...arg_a:any[])=>{
		arg_aa.push(arg_a)
		return arg_a
	}
	const onnullish__arg_aa:any[][] = []
	const onnullish = (...arg_a:any[])=>{
		onnullish__arg_aa.push(arg_a)
		return 'foobar'
	}
	const undefined_val = undefined
	const null_val = null
	const zero = 0
	const str = ''
	const o = {}
	equal(nullish__not_all_([undefined_val], _, onnullish),
		undefined)
	equal(arg_aa, [])
	equal(onnullish__arg_aa, [[undefined]])
	equal(nullish__not_all_([undefined_val, null_val], _, onnullish),
		null)
	equal(arg_aa, [])
	equal(onnullish__arg_aa, [[undefined], [null]])
	equal(nullish__not_all_([null_val, zero], _, onnullish),
		[null, zero])
	equal(arg_aa, [[null, zero]])
	equal(onnullish__arg_aa, [[undefined], [null]])
	equal(nullish__not_all_([undefined_val, str], _, onnullish),
		[undefined, str])
	equal(arg_aa, [[null, zero], [undefined, str]])
	equal(onnullish__arg_aa, [[undefined], [null]])
	equal(nullish__not_all_([null, undefined, o], _, onnullish),
		[null, undefined, o])
	equal(arg_aa, [[null, zero], [undefined, str], [null, undefined, o]])
	equal(onnullish__arg_aa, [[undefined], [null]])
})
test.run()
