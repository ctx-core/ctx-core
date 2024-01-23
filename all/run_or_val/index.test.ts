import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { run_or_val_ } from './index.js'
test('run_or_val_', ()=>{
	equal(run_or_val_(1), 1)
	equal(run_or_val_(null), null)
	equal(run_or_val_(()=>123), 123)
	equal(run_or_val_(()=>null), null)
	equal(run_or_val_(1, 'arg0', 'arg1'), 1)
	equal(
		run_or_val_(
			(...arg_a)=>arg_a, 'arg0', 'arg1'),
		['arg0', 'arg1'])
})
test.run()
