import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { null_ } from '../null/index.js'
import { parseInt_or_ } from '../parseInt_or/index.js'
test('parseInt_or_', ()=>{
	equal(parseInt_or_('11', null_), 11)
	equal(parseInt_or_('12.3', null_), 12)
	equal(parseInt_or_('not-a-number', null_), null)
})
test.run()
