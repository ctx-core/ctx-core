import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { invert_idx_a_ } from '../invert_idx_a/index.js'
test('invert_idx_a_', ()=>{
	equal(invert_idx_a_([2, 1, 3, 0]), [3, 1, 0, 2])
})
test.run()
