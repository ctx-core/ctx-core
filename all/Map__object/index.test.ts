import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { Map__object_ } from '../Map__object/index.js'
test('has_key_', ()=>{
	equal({ foo: 'bar', baz: 'quux' }, Map__object_(new Map([['foo', 'bar'], ['baz', 'quux']])))
})
test.run()
