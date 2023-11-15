import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { memo_ } from './index.js'
test('memo_|empty', ()=>{
	let call_count = 0
	let fn = ()=>{
		call_count++
		return 'memo-return'
	}
	let memo = memo_(fn)
	equal(call_count, 0)
	equal(memo(), 'memo-return')
	equal(call_count, 1)
	equal(memo(), 'memo-return')
	equal(call_count, 1)
})
test('memo_|primitive arguments', ()=>{
	let call_count = 0
	let fn = (arg0:number, arg1:number)=>{
		call_count++
		return arg0 + arg1
	}
	let memo = memo_(fn)
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
test('memo_|primitive|with objects', ()=>{
	let call_count = 0
	let fn = (arg0:number, arg1:object)=>{
		call_count++
		return { ...arg1, arg0 }
	}
	let memo = memo_(fn)
	let arg1 = { arg1: true }
	let arg1_2 = { arg1_2: true }
	equal(call_count, 0)
	equal(memo(1, arg1), { arg1: true, arg0: 1 })
	equal(call_count, 1)
	equal(memo(1, arg1), { arg1: true, arg0: 1 })
	equal(call_count, 1)
	equal(memo(1, arg1_2), { arg1_2: true, arg0: 1 })
	equal(call_count, 2)
	memo.clear()
	equal(memo(1, arg1), { arg1: true, arg0: 1 })
	equal(call_count, 3)
})
test('memo_|objects|with primitives', ()=>{
	let call_count = 0
	let fn = (arg0:object, arg1:number)=>{
		call_count++
		return { ...arg0, arg1 }
	}
	let memo = memo_(fn)
	let arg0 = { arg0: true }
	let arg0_2 = { arg0_2: true }
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
