import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { tup } from '../tup/index.js'
import { bind_apply_ } from './index.js'
test('bind_apply_', ()=>{
	function fn(this:unknown, a:number, b:number, c:number, d:number) {
	  return [this, a, b, c, d]
	}
	const _this = { foo: 'bar' }
	equal(bind_apply_(fn, _this)(0, 1, 2, 3), [_this, 0, 1, 2, 3])
	equal(bind_apply_(fn, _this, tup(0, 1))(2, 3), [_this, 0, 1, 2, 3])
	// @ts-expect-error TS2345
	equal(bind_apply_(fn, _this)(0, 1, 2, 3, 4), [_this, 0, 1, 2, 3])
	// @ts-expect-error TS2345
	equal(bind_apply_(fn, _this, tup(0, 1))(2, 3, 4), [_this, 0, 1, 2, 3])
	// @ts-expect-error TS2345
	equal(bind_apply_(fn, _this, tup(0, 1, 2, 3, 4))(), [_this, 0, 1, 2, 3])
})
test.run()
