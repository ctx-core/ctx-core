import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { null_ } from '../null/index.js'
import { parseInt_andor_ } from '../parseInt_andor/index.js'
test('parseInt_andor_', ()=>{
	equal(parseInt_andor_('11'), 11)
	equal(parseInt_andor_('11', $=>$ * 2, null_), 22)
	equal(parseInt_andor_('12.3'), 12)
	equal(parseInt_andor_('not-a-number', $=>$, $=>$), NaN)
})
test.run()
