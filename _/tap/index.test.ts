import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { tap } from './index.js'
test('tap', ()=>{
	const o = {} as { foo?:string }
	equal(tap(o, _o=>{
		_o.foo = 'bar'
	}), { foo: 'bar' })
})
test.run()
