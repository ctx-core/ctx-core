import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { falsy__none_ } from '../falsy__none/index.js'
test('falsy__none_|-onfalsy', ()=>{
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
	equal(falsy__none_([undefined_val], _), undefined)
	equal(arg_aa, [])
	equal(falsy__none_([null_val], _), null)
	equal(arg_aa, [])
	equal(falsy__none_([zero], _), [zero])
	equal(arg_aa, [[zero]])
	equal(falsy__none_([str], _), [str])
	equal(arg_aa, [[zero], [str]])
	equal(falsy__none_([o], _), [o])
	equal(arg_aa, [[zero], [str], [o]])
})
test('falsy__none_|+onfalsy', ()=>{
	const arg_aa:any[][] = []
	const _ = (...arg_a:any[])=>{
		arg_aa.push(arg_a)
		return arg_a
	}
	const onfalsy__arg_aa:any[][] = []
	const onfalsy = (...arg_a:any[])=>{
		onfalsy__arg_aa.push(arg_a)
		return 'foobar'
	}
	const undefined_val = undefined
	const null_val = null
	const zero = 0
	const str = ''
	const o = {}
	equal(falsy__none_([undefined_val], _, onfalsy), undefined)
	equal(arg_aa, [])
	equal(onfalsy__arg_aa, [[undefined]])
	equal(falsy__none_([null_val], _, onfalsy), null)
	equal(arg_aa, [])
	equal(onfalsy__arg_aa, [[undefined], [null]])
	equal(falsy__none_([zero], _, onfalsy), [zero])
	equal(arg_aa, [[zero]])
	equal(onfalsy__arg_aa, [[undefined], [null]])
	equal(falsy__none_([str], _, onfalsy), [str])
	equal(arg_aa, [[zero], [str]])
	equal(onfalsy__arg_aa, [[undefined], [null]])
	equal(falsy__none_([o], _, onfalsy), [o])
	equal(arg_aa, [[zero], [str], [o]])
	equal(onfalsy__arg_aa, [[undefined], [null]])
})
test.run()
