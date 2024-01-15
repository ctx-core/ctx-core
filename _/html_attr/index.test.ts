import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { html_attr_, raw__html_attr_ } from './index.js'
test('html_attr_', ()=>{
	equal(html_attr_('id', '123&bar'), 'id="123&amp;bar"')
})
test('raw__html_attr_', ()=>{
	equal(raw__html_attr_('id', '123&amp;bar'), 'id="123&amp;bar"')
})
test.run()
