import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { nullish__none_ } from '../nullish__none/index.js'
test('nullish__none_|-onnullish', ()=>{
	const arg_aa:unknown[][] = []
	const _ = (...arg_a:unknown[])=>{
		arg_aa.push(arg_a)
		return arg_a
	}
	const undefined_val = undefined
	const null_val = null
	const zero = 0
	const str = ''
	const o = {}
	equal(nullish__none_([undefined_val], _), undefined)
	equal(arg_aa, [])
	equal(nullish__none_([null_val], _), null)
	equal(arg_aa, [])
	equal(nullish__none_([zero], _), [zero])
	equal(arg_aa, [[zero]])
	equal(nullish__none_([str], _), [str])
	equal(arg_aa, [[zero], [str]])
	equal(nullish__none_([o], _), [o])
	equal(arg_aa, [[zero], [str], [o]])
})
test('nullish__none_|+onnullish', ()=>{
	const arg_aa:unknown[][] = []
	const _ = (...arg_a:unknown[])=>{
		arg_aa.push(arg_a)
		return arg_a
	}
	const onnullish__arg_aa:unknown[][] = []
	const onnullish = (...arg_a:unknown[])=>{
		onnullish__arg_aa.push(arg_a)
		return 'foobar'
	}
	const undefined_val = undefined
	const null_val = null
	const zero = 0
	const str = ''
	const o = {}
	equal(nullish__none_([undefined_val], _, onnullish), undefined)
	equal(arg_aa, [])
	equal(onnullish__arg_aa, [[undefined]])
	equal(nullish__none_([null_val], _, onnullish), null)
	equal(arg_aa, [])
	equal(onnullish__arg_aa, [[undefined], [null]])
	equal(nullish__none_([zero], _, onnullish), [zero])
	equal(arg_aa, [[zero]])
	equal(onnullish__arg_aa, [[undefined], [null]])
	equal(nullish__none_([str], _, onnullish), [str])
	equal(arg_aa, [[zero], [str]])
	equal(onnullish__arg_aa, [[undefined], [null]])
	equal(nullish__none_([o], _, onnullish), [o])
	equal(arg_aa, [[zero], [str], [o]])
	equal(onnullish__arg_aa, [[undefined], [null]])
})
test.run()
