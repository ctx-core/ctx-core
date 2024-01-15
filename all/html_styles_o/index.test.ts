import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { html_styles_o_ } from './index.js'
test('html_styles_o_', ()=>{
	equal(html_styles_o_('position: absolute;   top:   0;'), {
		position: 'absolute',
		top: '0'
	})
})
test.run()
