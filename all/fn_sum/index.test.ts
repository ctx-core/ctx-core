import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { fn_sum_ } from '../fn_sum/index.js'
test('fn_sum_', ()=>{
	equal(
		fn_sum_([null, 1, 2, null, null, 3],
			val=>
				val == null
					? null
					: val * 2),
		12)
})
test.run()