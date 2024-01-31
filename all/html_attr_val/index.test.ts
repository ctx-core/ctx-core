import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { html_attr_val_ as browser_html_attr_val_ } from './index.browser.js'
import { html_attr_val_ } from './index.js'
test('html_attr_val_', ()=>{
	equal(
		html_attr_val_('foo', null, ['bar', undefined, 'baz']),
		'foo bar baz')
})
test('html_attr_val_|browser', ()=>{
	equal(
		browser_html_attr_val_('foo', null, ['bar', undefined, 'baz']),
		'foo bar baz')
})
test.run()
