import { test } from 'uvu'
import { equal, is } from 'uvu/assert'
import { type ctx_T, type ctx_s_T } from '../be_/index.js'
import { ctx__new, is_ctx_, ns_ctx_, ns_ctx__new } from '../ctx/index.js'
import type { Equal, Expect } from '../test/index.js'
test('ctx__new', ()=>{
	const ctx = ctx__new()
	equal(ctx.is_ctx, true)
})
test('source_ctx__new', ()=>{
	const ctx0 = ns_ctx__new(
		'test_ns', ctx__new(), 'test_ns2')
	equal(ctx0.is_ctx, true)
	equal(ctx0.s.test_ns instanceof Map, true)
	equal(ctx0.s[''] instanceof Map, true)
	is.not(ctx0.s.test_ns, ctx0.s[''])
})
test('ns_ctx__new|types', ()=>{
	/* eslint-disable @typescript-eslint/no-unused-vars */
	const empty_ctx = ns_ctx__new('')
	type test_empty_ctx = Expect<Equal<typeof empty_ctx, ctx_T<''>>>
	const single_ctx = ns_ctx__new('test_ns')
	type test_single_ctx = Expect<Equal<typeof single_ctx, ctx_T<'test_ns'>>>
	// @ts-expect-error TS2345
	type test_single_ctx_fail = Expect<Equal<typeof single_ctx, ctx_T<'fail'>>>
	const triple_ctx =
		ns_ctx__new('test_ns', empty_ctx, 'test_ns2')
	type test_triple_ctx = Expect<Equal<typeof triple_ctx, ctx_T<''|'test_ns'|'test_ns2'>>>
	// @ts-expect-error TS2345
	type test_triple_ctx_fail = Expect<Equal<typeof triple_ctx, ctx_T<''|'test_ns'|'test_ns2'|'fail'>>>
	type test_triple_ctx_s = Expect<Equal<typeof triple_ctx.s, ctx_s_T<''|'test_ns'|'test_ns2'>>>
	/* eslint-enable @typescript-eslint/no-unused-vars */
})
test('is_ctx_', ()=>{
	const ctx0 = ctx__new()
	const ctx1 = ctx__new()
	const ctx2 = ctx__new()
	const not_ctx = {}
	equal(is_ctx_(ctx0), true)
	equal(is_ctx_(ns_ctx_(ctx0, ctx1, ctx2)), true)
	equal(is_ctx_(not_ctx), false)
})
test.run()
