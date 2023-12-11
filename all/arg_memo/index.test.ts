import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { arg_memo_ } from './index.js'
test('arg_memo_|empty', ()=>{
	let call_count = 0
	const fn = ()=>{
		call_count++
		return 'memo-return'
	}
	const memo = arg_memo_(fn)
	equal(call_count, 0)
	equal(memo(), 'memo-return')
	equal(call_count, 1)
	equal(memo(), 'memo-return')
	equal(call_count, 1)
})
test('arg_memo_|primitive arguments', ()=>{
	let call_count = 0
	const fn = (arg0:number, arg1:number)=>{
		call_count++
		return arg0 + arg1
	}
	const memo = arg_memo_(fn)
	equal(call_count, 0)
	equal(memo(1, 2), 3)
	equal(call_count, 1)
	equal(memo(1, 2), 3)
	equal(call_count, 1)
	equal(memo(1, 3), 4)
	equal(call_count, 2)
	memo.clear()
	equal(memo(1, 2), 3)
	equal(call_count, 3)
})
test('arg_memo_|primitive|with objects', ()=>{
	let call_count = 0
	const fn = (arg0:number, arg1:object)=>{
		call_count++
		return { ...arg1, arg0 }
	}
	const memo = arg_memo_(fn)
	const arg0 = { arg1: true }
	const arg0_2 = { arg1_2: true }
	equal(call_count, 0)
	equal(memo(1, arg0), { arg1: true, arg0: 1 })
	equal(call_count, 1)
	equal(memo(1, arg0), { arg1: true, arg0: 1 })
	equal(call_count, 1)
	equal(memo(1, arg0_2), { arg1_2: true, arg0: 1 })
	equal(call_count, 2)
	memo.clear()
	equal(memo(1, arg0), { arg1: true, arg0: 1 })
	equal(call_count, 3)
})
test('arg_memo_|objects|with primitives', ()=>{
	let call_count = 0
	const fn = (arg0:object, arg1:number)=>{
		call_count++
		return { ...arg0, arg1 }
	}
	const memo = arg_memo_(fn)
	const arg0 = { arg0: true }
	const arg0_2 = { arg0_2: true }
	equal(call_count, 0)
	equal(memo(arg0, 1), { arg0: true, arg1: 1 })
	equal(call_count, 1)
	equal(memo(arg0, 1), { arg0: true, arg1: 1 })
	equal(call_count, 1)
	equal(memo(arg0_2, 1), { arg0_2: true, arg1: 1 })
	equal(call_count, 2)
	memo.clear()
	equal(memo(arg0, 1), { arg0: true, arg1: 1 })
	equal(call_count, 3)
})
test.run()
