import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { html_class_, html_class__ } from './index.js'
test('html_class_', ()=>{
	equal(html_class_('foo', 'bar'), 'foo bar')
	equal(html_class_('foo', {
		bar: true,
		baz: false,
	}), 'foo bar')
	equal(html_class_({
		bar: true,
		baz: false,
	}, 'foo'), 'bar foo')
	equal(html_class_({
		bar: true,
		baz: false,
	}, ['foo']), 'bar foo')
})
test('html_class__', ()=>{
	equal(html_class__('foo', 'bar')(), 'foo bar')
	equal(html_class__('foo', {
		bar: true,
	})({ baz: false, }), 'foo bar')
	equal(html_class__({
		baz: false,
	}, 'foo')({ bar: true }), 'foo bar')
	equal(html_class__(['foo'])({
		bar: true,
		baz: false,
	}), 'foo bar')
})
test.run()
