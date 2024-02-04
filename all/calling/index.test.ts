import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { calling } from './index.js'
test('calling', ()=>{
	let count = 0
	const fn = ()=>{
		count++
	}
	equal(count, 0)
	equal(calling(fn), fn)
	equal(count, 1)
})
test.run()
