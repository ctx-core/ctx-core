import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { idx_a_ } from '../idx_a/index.js'
test('idx_a_', ()=>{
	equal(idx_a_(5), [0, 1, 2, 3, 4])
	equal(idx_a_(5, 0), [0, 1, 2, 3, 4])
	equal(idx_a_(5, 3), [3, 4, 5, 6, 7])
})
test.run()
