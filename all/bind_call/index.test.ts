import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { bind_call_ } from './index.js'
test('bind_call_', ()=>{
	function fn(this:unknown, a:number, b:number, c:number, d:number) {
		return [this, a, b, c, d]
	}
	const _this = { foo: 'bar' }
	equal(bind_call_(fn, _this)(0, 1, 2, 3), [_this, 0, 1, 2, 3])
	equal(bind_call_(fn, _this, 0, 1)(2, 3), [_this, 0, 1, 2, 3])
	// @ts-expect-error TS2345
	equal(bind_call_(fn, _this)(0, 1, 2, 3, 4), [_this, 0, 1, 2, 3])
	// @ts-expect-error TS2345
	equal(bind_call_(fn, _this, 0, 1)(2, 3, 4), [_this, 0, 1, 2, 3])
	// @ts-expect-error TS2345
	equal(bind_call_(fn, _this, 0, 1, 2, 3, 4)(), [_this, 0, 1, 2, 3])
})
test.run()
