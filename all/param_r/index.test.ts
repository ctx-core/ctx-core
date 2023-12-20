import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { param_r_ } from './index.js'
test('param_r_|multiple values & short flags', ()=>{
	const param_r = param_r_(['--foo', 'bar', '--baz', '-f', '123'], {
		foo: '-f, --foo',
		baz: '-b, --baz'
	})
	equal({
		foo: ['bar', '123'],
		baz: []
	}, param_r)
})
test('param_r_|default values', ()=>{
	const param_r = param_r_(['--foo', 'bar', '--baz', '-f', '123'], {
		foo: '-f, --foo',
		baz: '-b, --baz',
		test: '-t, --test'
	}, {
		test: ['test default']
	})
	equal({
		foo: ['bar', '123'],
		baz: [],
		test: ['test default']
	}, param_r)
})
test.run()
