import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { arg_memo_ } from './index.js'
test('ctx-core/all|loads', ()=>{
	equal(arg_memo_, arg_memo_)
})
test.run()
