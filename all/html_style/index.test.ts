import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { html_style_, html_style__ } from './index.js'
test('html_style_', ()=>{
	equal(
		html_style_('display: block', 'position: absolute'),
		'display: block; position: absolute;')
	equal(
		html_style_('display: block; position: absolute;'),
		'display: block; position: absolute;')
	equal(
		html_style_('display: block', {
			position: 'absolute',
			top: null,
		}),
		'display: block; position: absolute;')
	equal(
		html_style_({
			display: 'block',
			top: null,
		}, 'position: absolute'),
		'display: block; position: absolute;')
	equal(
		html_style_({
			display: 'block',
			top: null,
		}, ['position: absolute']),
		'display: block; position: absolute;')
	equal(
		html_style_({
			display: 'block',
			top: null,
		}, ['position: absolute; top: 0']),
		'display: block; position: absolute; top: 0;')
	equal(
		html_style_({
			display: 'block',
			top: null,
		}, ['position: absolute; top: 0']),
		'display: block; position: absolute; top: 0;')
	equal(
		html_style_({
			display: 'block',
			top: null,
		}, ['position: absolute; top: 0;']),
		'display: block; position: absolute; top: 0;')
})
test('html_style__', ()=>{
	equal(
		html_style__('display: block')('position: absolute'),
		'display: block; position: absolute;')
	equal(
		html_style__('display: block;')('position: absolute;'),
		'display: block; position: absolute;')
	equal(
		html_style__('display: block')({
			position: 'absolute',
			top: null,
		}),
		'display: block; position: absolute;')
	equal(
		html_style__({
			display: 'block',
			top: null,
		})('position: absolute'),
		'display: block; position: absolute;')
	equal(
		html_style__({
			display: 'block',
			top: null,
		})(['position: absolute']),
		'display: block; position: absolute;')
	equal(
		html_style__({
			display: 'block',
			top: null,
		})(['position: absolute; top: 0']),
		'display: block; position: absolute; top: 0;')
	equal(
		html_style__({
			display: 'block',
			top: null,
		})(['position: absolute; top: 0']),
		'display: block; position: absolute; top: 0;')
	equal(
		html_style__({
			display: 'block',
			top: null,
		})(['position: absolute; top: 0;']),
		'display: block; position: absolute; top: 0;')
})
test.run()
