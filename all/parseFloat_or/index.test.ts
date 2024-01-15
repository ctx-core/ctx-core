import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { null_ } from '../null/index.js'
import { parseFloat_or_ } from '../parseFloat_or/index.js'
test('parseFloat_or_', ()=>{
	equal(parseFloat_or_('12.3', null_), 12.3)
	equal(parseFloat_or_('not-a-number', null_), null)
})
test.run()
