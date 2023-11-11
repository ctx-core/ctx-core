import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { ctx__new, is_ctx_ } from '../ctx/index.js'
test('is_ctx_', ()=>{
	const ctx0 = ctx__new()
	const ctx1 = ctx__new()
	const ctx2 = ctx__new()
	const not_ctx = {}
	equal(is_ctx_(ctx0), true)
	equal(is_ctx_([ctx0, [ctx1], [[ctx2]]]), true)
	equal(is_ctx_([[[ctx0]]]), true)
	equal(is_ctx_([ctx0, [ctx1], [[[]]]]), true)
	equal(is_ctx_(not_ctx), false)
	equal(is_ctx_([ctx0, [ctx1], [[ctx2]], [not_ctx]]), false)
})
test.run()
