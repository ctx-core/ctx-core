import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { mean } from '../mean/index.js'
test('mean', ()=>{
	equal(
		mean([null, 2, 1, null, 2]),
		5.0 / 3
	)
})
test.run()