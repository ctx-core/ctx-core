import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { numeric_range_ } from '../numeric_range/index.js'
test('numeric_range_', ()=>{
	equal(numeric_range_(5), [0, 1, 2, 3, 4])
	equal(numeric_range_(0, 5), [0, 1, 2, 3, 4])
	equal(numeric_range_(3, 5), [3, 4, 5, 6, 7])
})
test.run()
