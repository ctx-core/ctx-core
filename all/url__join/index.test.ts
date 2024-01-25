import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { url__join } from './index.js'
test('url__join', ()=>{
	equal(
		url__join('foo', 'bar', 'baz'),
		'/foo/bar/baz')
	equal(
		url__join(['foo', 'bar', 'baz']),
		'/foo/bar/baz')
	equal(
		url__join('foo', ['bar', 'baz']),
		'/foo/bar/baz')
	equal(
		url__join(['foo', ['bar', 'baz']]),
		'/foo/bar/baz')
	equal(
		url__join(['foo', ['bar', 'baz', ['?id=1', '&something=else']]]),
		'/foo/bar/baz?id=1&something=else')
	equal(
		url__join(['foo', ['bar', 'baz', ['?id=1', 'something=else']]]),
		'/foo/bar/baz?id=1&something=else')
	equal(
		url__join(['http://localhost/foo/bar/baz?id=1', [['something=else']]]),
		'http://localhost/foo/bar/baz?id=1&something=else')
})
test.run()
