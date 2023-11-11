import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { null_ } from '../null/index.js'
import { parseFloat_andor_ } from '../parseFloat_andor/index.js'
test('parseFloat_andor_', ()=>{
	equal(parseFloat_andor_('12.3'), 12.3)
	equal(parseFloat_andor_('12.3', $=>$ * 2), 12.3 * 2)
	equal(parseFloat_andor_('not-a-number', $=>$, null_), null)
	equal(parseFloat_andor_('not-a-number', $=>$, $=>$), NaN)
})
test.run()
