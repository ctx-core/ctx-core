import { test } from 'uvu'
import { equal } from 'uvu/assert'
import {
	background_image_style_,
	background_image_style_o_,
	html_style_,
	html_style__,
	html_style_url_
} from './index.js'
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
		'display: block; position:absolute;')
	equal(
		html_style_({
			display: 'block',
			top: null,
		}, 'position: absolute'),
		'display:block; position: absolute;')
	equal(
		html_style_({
			display: 'block',
			top: null,
		}, ['position: absolute']),
		'display:block; position: absolute;')
	equal(
		html_style_({
			display: 'block',
			top: null,
		}, ['position: absolute; top: 0']),
		'display:block; position: absolute; top: 0;')
	equal(
		html_style_({
			display: 'block',
			top: null,
		}, ['position: absolute; top: 0']),
		'display:block; position: absolute; top: 0;')
	equal(
		html_style_({
			display: 'block',
			top: null,
		}, ['position: absolute; top: 0;']),
		'display:block; position: absolute; top: 0;')
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
		'display: block; position:absolute;')
	equal(
		html_style__({
			display: 'block',
			top: null,
		})('position: absolute'),
		'display:block; position: absolute;')
	equal(
		html_style__({
			display: 'block',
			top: null,
		})(['position: absolute']),
		'display:block; position: absolute;')
	equal(
		html_style__({
			display: 'block',
			top: null,
		})(['position: absolute; top: 0']),
		'display:block; position: absolute; top: 0;')
	equal(
		html_style__({
			display: 'block',
			top: null,
		})(['position: absolute; top: 0']),
		'display:block; position: absolute; top: 0;')
	equal(
		html_style__({
			display: 'block',
			top: null,
		})(['position: absolute; top: 0;']),
		'display:block; position: absolute; top: 0;')
})
test('background_image_style_', ()=>{
	equal(
		background_image_style_('/foo/bar.svg'),
		"background-image:url('/foo/bar.svg');")
})
test('background_image_style_o_', ()=>{
	equal(
		background_image_style_o_('/foo/bar.svg'),
		{
			'background-image': "url('/foo/bar.svg')"
		})
})
test('style_url_', ()=>{
	equal(
		html_style_url_('/foo/bar.svg'),
		"url('/foo/bar.svg')")
})
test.run()
