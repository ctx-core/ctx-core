import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_, type Ctx_wide_T } from '../be_/index.js'
import { be_sig_triple_ } from '../be_sig_triple/index.js'
import { ctx__new, ns_ctx__new } from '../ctx/index.js'
import { memosig_, type sig_T } from '../rmemo/index.js'
import type { Equal, Expect } from '../test/index.js'
import { be_lock_memosig_triple_ } from './index.js'
test('be_lock_memosig_triple_', ()=>{
	const [
		,
		base_,
		base__set,
	] = be_sig_triple_(()=>1)
	const [
		foobar$_,
		foobar_,
		foobar__set,
	] = be_lock_memosig_triple_<number, '', sig_T<number>&{
		count:number
	}>((
		_ctx,
		foobar$
	)=>{
		equal(_ctx, ctx)
		foobar$.count = (foobar$.count ||= 0) + 1
		return base_(ctx) + 1
	})
	const ctx = ctx__new()
	equal(foobar$_(ctx).count, undefined)
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
	equal(foobar$_(ctx).count, 1)
	foobar__set(ctx, 5)
	equal(foobar$_(ctx)._, 5)
	equal(foobar_(ctx), 5)
	equal(foobar$_(ctx).count, 1)
	base__set(ctx, 2)
	equal(foobar$_(ctx)._, 5)
	equal(foobar_(ctx), 5)
	equal(foobar$_(ctx).count, 1)
})
test('be_lock_memosig_triple_|+id|+ns', ()=>{
	const ctx = ns_ctx__new('test_ns')
	let subscriber_count = 0
	const [
		,
		base_,
		base__set,
	] = be_sig_triple_(
		()=>1,
		{ ns: 'test_ns' })
	const [
		,
		subscriber_dep_,
		subscriber_dep__set
	] = be_sig_triple_(()=>1,
		{ ns: 'test_ns' })
	const [
		foobar$_,
		foobar_,
		foobar__set,
	] = be_lock_memosig_triple_<number, 'test_ns'>(
		ctx=>{
			/* eslint-disable @typescript-eslint/no-unused-vars */
			type test_ctx = Expect<Equal<typeof ctx, Ctx_wide_T<'test_ns'>>>
			/* eslint-enable @typescript-eslint/no-unused-vars */
			return base_(ctx) + 1
		},
		{ id: 'foobar', ns: 'test_ns' }
	).add((ctx, foobar$)=>{
		subscriber_count++
		subscriber_dep__set(ctx, subscriber_count + foobar$())
	})
	equal(subscriber_count, 0)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx))._, 2)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 2)
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
	equal(subscriber_count, 1)
	equal((ctx.s['test_ns'].get('foobar')![0] as sig_T<number>)._, 2)
	equal(subscriber_dep_(ctx), 3)
	foobar__set(ns_ctx__new(ctx__new(), ctx), 5)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx))._, 5)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 5)
	equal(foobar$_(ctx)._, 5)
	equal(foobar_(ctx), 5)
	equal((ctx.s['test_ns'].get('foobar')![0] as sig_T<number>)._, 5)
	equal(subscriber_count, 2)
	equal(subscriber_dep_(ctx), 7)
	base__set(ctx, 2)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx))._, 3)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 3)
	equal(foobar$_(ctx)._, 3)
	equal(foobar_(ctx), 3)
	equal(subscriber_count, 3)
	equal((ctx.s['test_ns'].get('foobar')![0] as sig_T<number>)._, 3)
	equal(subscriber_dep_(ctx), 6)
})
test('be_lock_memosig_triple_|+be', ()=>{
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
		foobar__set,
	] = be_lock_memosig_triple_<number, 'test_ns', custom_sig_T>(
		be_(ctx=>{
			/* eslint-disable @typescript-eslint/no-unused-vars */
			type test_ctx = Expect<Equal<typeof ctx, Ctx_wide_T<'test_ns'>>>
			/* eslint-enable @typescript-eslint/no-unused-vars */
			const foobar$ =
				memosig_(
					()=>base_(ctx) + 1
				).add(foobar$=>{
					foobar$()
					subscriber_count++
				}) as custom_sig_T
			foobar$.custom = 'custom-val'
			return foobar$
		}, { id: 'foobar', ns: 'test_ns' }))
	equal(subscriber_count, 0)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx))._, 2)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 2)
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
	equal(subscriber_count, 1)
	equal((ctx.s.test_ns.get('foobar')![0] as sig_T<number>)._, 2)
	equal(foobar$_(ctx).custom, 'custom-val')
	foobar__set(ctx, 5)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx))._, 5)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 5)
	equal(foobar$_(ctx)._, 5)
	equal(foobar_(ctx), 5)
	equal(subscriber_count, 2)
	equal((ctx.s.test_ns.get('foobar')![0] as sig_T<number>)._, 5)
	equal(foobar$_(ctx).custom, 'custom-val')
	base__set(ns_ctx__new(ctx__new(), ctx), 2)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx))._, 3)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 3)
	equal(foobar$_(ctx)._, 3)
	equal(foobar_(ctx), 3)
	equal((ctx.s.test_ns.get('foobar')![0] as sig_T<number>)._, 3)
	equal(foobar$_(ctx).custom, 'custom-val')
	equal(subscriber_count, 3)
})
test.run()
type custom_sig_T = sig_T<number>&{
	custom:string
}
