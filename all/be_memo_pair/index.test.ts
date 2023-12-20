import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_, type Ctx_wide_T } from '../be_/index.js'
import { be_sig_triple_ } from '../be_sig_triple/index.js'
import { ctx__new, ns_ctx__new } from '../ctx/index.js'
import type { memo_T, sig_T } from '../rmemo/index.js'
import { memo_ } from '../rmemo/index.js'
import type { Equal, Expect } from '../test/index.js'
import { be_memo_pair_ } from './index.js'
test('be_memo_pair_', ()=>{
	const [
		,
		base_,
		base__set,
	] = be_sig_triple_(()=>1)
	const [
		foobar$_,
		foobar_,
	] = be_memo_pair_<number, '', sig_T<number>&{ count:number }>((
		_ctx,
		foobar$
	)=>{
		/* eslint-disable @typescript-eslint/no-unused-vars */
		type test__ctx = Expect<Equal<typeof _ctx, Ctx_wide_T<''>>>
		/* eslint-enable @typescript-eslint/no-unused-vars */
		equal(_ctx, ctx)
		foobar$.count = (foobar$.count ||= 0) + 1
		return base_(ctx) + 1
	})
	const ctx = ctx__new()
	equal(foobar$_(ctx).count, undefined)
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
	equal(foobar$_(ctx).count, 1)
	base__set(ctx, 2)
	equal(foobar$_(ctx)._, 3)
	equal(foobar_(ctx), 3)
	equal(foobar$_(ctx).count, 2)
})
test('be_memo_pair_|+id|+ns|+oninit|+subscriber_a', ()=>{
	const ctx = ns_ctx__new('test_ns')
	let subscriber_count = 0
	const [
		,
		subscriber_dep_,
		subscriber_dep__set
	] = be_sig_triple_(()=>1,
		{ ns: 'test_ns' })
	const [
		,
		base_,
		base__set,
	] = be_sig_triple_(()=>1,
		{ ns: 'test_ns' })
	const [
		foobar$_,
		foobar_,
	] = be_memo_pair_<number, 'test_ns'>(ctx=>base_(ctx) + 1,
		(ctx, foobar$)=>{
			/* eslint-disable @typescript-eslint/no-unused-vars */
			type test_ctx = Expect<Equal<typeof ctx, Ctx_wide_T<'test_ns'>>>
			/* eslint-enable @typescript-eslint/no-unused-vars */
			subscriber_count++
			subscriber_dep__set(ctx, subscriber_count + foobar$())
		},
		{ id: 'foobar', ns: 'test_ns' })
	equal(subscriber_count, 0)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx))._, 2)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 2)
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
	equal((ctx.s.test_ns.get('foobar')![0] as memo_T<number>)._, 2)
	equal(subscriber_count, 1)
	equal(subscriber_dep_(ctx), 3)
	base__set(ctx, 2)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx))._, 3)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 3)
	equal(foobar$_(ctx)._, 3)
	equal(foobar_(ctx), 3)
	equal((ctx.s.test_ns.get('foobar')![0] as memo_T<number>)._, 3)
	equal(subscriber_count, 2)
	equal(subscriber_dep_(ctx), 5)
})
test('be_memo_pair_|subscriber|receives a memosig to set the value of the memo', ()=>{
	const ctx = ctx__new()
	const [
		,
		base_,
		base__set,
	] = be_sig_triple_(()=>1)
	const [
		foobar$_,
		foobar_,
	] = be_memo_pair_(ctx=>{
		/* eslint-disable @typescript-eslint/no-unused-vars */
		type test_ctx = Expect<Equal<typeof ctx, Ctx_wide_T<''>>>
		/* eslint-enable @typescript-eslint/no-unused-vars */
		return 1
	}, (ctx, foobar$)=>{
		foobar$._ = base_(ctx) + 1
	})
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
	base__set(ctx, 2)
	equal(foobar$_(ctx)._, 3)
	equal(foobar_(ctx), 3)
})
test('be_memo_pair_|be', ()=>{
	const ctx = ns_ctx__new('test_ns')
	let subscriber_count = 0
	const [
		,
		base_,
		base__set,
	] = be_sig_triple_(()=>1,
		{ ns: 'test_ns' })
	const [
		foobar$_,
		foobar_,
	] = be_memo_pair_<number, 'test_ns', custom_memo_T>(
		be_(_ctx=>{
			/* eslint-disable @typescript-eslint/no-unused-vars */
			type test__ctx = Expect<Equal<typeof _ctx, Ctx_wide_T<'test_ns'>>>
			/* eslint-enable @typescript-eslint/no-unused-vars */
			const foobar$ = memo_(
				()=>base_(ctx) + 1,
				()=>subscriber_count++
			) as custom_memo_T
			equal(_ctx.s.test_ns, ctx.s.test_ns)
			foobar$.custom = 'custom-val'
			return foobar$
		}, {
			id: 'foobar',
			ns: 'test_ns',
		}))
	equal(subscriber_count, 0)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx))._, 2)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 2)
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
	equal((ctx.s.test_ns.get('foobar')![0] as memo_T<number>)._, 2)
	equal(foobar$_(ctx).custom, 'custom-val')
	equal(subscriber_count, 1)
	base__set(ctx, 2)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx))._, 3)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 3)
	equal(foobar$_(ctx)._, 3)
	equal(foobar_(ctx), 3)
	equal((ctx.s.test_ns.get('foobar')![0] as memo_T<number>)._, 3)
	equal(foobar$_(ctx).custom, 'custom-val')
	equal(subscriber_count, 1)
})
test.run()
type custom_memo_T = sig_T<number>&{ custom:string }
