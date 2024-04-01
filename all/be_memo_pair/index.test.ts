import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { ns_id_be_, type wide_ctx_T } from '../be_/index.js'
import { be_sig_triple_, ns_be_sig_triple_ } from '../be_sig_triple/index.js'
import { ctx__new, ns_ctx__new } from '../ctx/index.js'
import { memo_, type memo_T } from '../rmemo/index.js'
import type { Equal, Expect } from '../test/index.js'
import { be_memo_pair_, id_be_memo_pair_, ns_be_memo_pair_, ns_id_be_memo_pair_ } from './index.js'
test('be_memo_pair_', ()=>{
	const [
		,
		base_,
		base__set,
	] = be_sig_triple_(()=>1)
	const [
		foobar$_,
		foobar_,
	] = be_memo_pair_<number, '', memo_T<number>&{ count:number }>((
		_ctx,
		foobar$
	)=>{
		/* eslint-disable @typescript-eslint/no-unused-vars */
		type test__ctx = Expect<Equal<typeof _ctx, wide_ctx_T<''>>>
		/* eslint-enable @typescript-eslint/no-unused-vars */
		equal(_ctx, ctx)
		foobar$.count = (foobar$.count ||= 0) + 1
		return base_(ctx) + 1
	})
	const ctx = ctx__new()
	equal(foobar$_(ctx).count, undefined)
	equal(foobar$_(ctx)(), 2)
	equal(foobar_(ctx), 2)
	equal(foobar$_(ctx).count, 1)
	base__set(ctx, 2)
	equal(foobar$_(ctx)(), 3)
	equal(foobar_(ctx), 3)
	equal(foobar$_(ctx).count, 2)
})
test('ns_id_be_memo_pair_|+add', ()=>{
	const ctx = ns_ctx__new('test_ns')
	let add_count = 0
	const [
		,
		add_dep_,
		add_dep__set
	] = ns_be_sig_triple_(
		'test_ns',
		()=>1)
	const [
		,
		base_,
		base__set,
	] = ns_be_sig_triple_(
		'test_ns',
		()=>1)
	const [
		foobar$_,
		foobar_,
	] = ns_id_be_memo_pair_<number, 'test_ns'>(
		'test_ns',
		'foobar',
		ctx=>base_(ctx) + 1,
		[(ctx, foobar$)=>memo_(()=>{
			/* eslint-disable @typescript-eslint/no-unused-vars */
			type test_ctx = Expect<Equal<typeof ctx, wide_ctx_T<'test_ns'>>>
			/* eslint-enable @typescript-eslint/no-unused-vars */
			add_count++
			add_dep__set(ctx, add_count + foobar$())
		})
		])
	equal(add_count, 0)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx))(), 2)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 2)
	equal(foobar$_(ctx)(), 2)
	equal(foobar_(ctx), 2)
	equal((ctx.s.test_ns.get('foobar')![0] as memo_T<number>)(), 2)
	equal(add_count, 1)
	equal(add_dep_(ctx), 3)
	base__set(ctx, 2)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx))(), 3)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 3)
	equal(foobar$_(ctx)(), 3)
	equal(foobar_(ctx), 3)
	equal((ctx.s.test_ns.get('foobar')![0] as memo_T<number>)(), 3)
	equal(add_count, 2)
	equal(add_dep_(ctx), 5)
})
test('be_memo_pair_|add|receives a memosig to set the value of the memo', ()=>{
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
		type test_ctx = Expect<Equal<typeof ctx, wide_ctx_T<''>>>
		/* eslint-enable @typescript-eslint/no-unused-vars */
		return 1
	}, [
		(ctx, foobar$)=>memo_(()=>{
			foobar$.set(base_(ctx) + 1)
		})
	])
	equal(foobar$_(ctx)(), 2)
	equal(foobar_(ctx), 2)
	base__set(ctx, 2)
	equal(foobar$_(ctx)(), 3)
	equal(foobar_(ctx), 3)
})
test('be_memo_pair_|be', ()=>{
	const ctx = ns_ctx__new('test_ns')
	let add_count = 0
	const [
		,
		base_,
		base__set,
	] = ns_be_sig_triple_(
		'test_ns',
		()=>1)
	const [
		foobar$_,
		foobar_,
	] = be_memo_pair_<number, 'test_ns', { custom:string }>(
		ns_id_be_(
			'test_ns',
			'foobar',
			_ctx=>{
				/* eslint-disable @typescript-eslint/no-unused-vars */
				type test__ctx = Expect<Equal<typeof _ctx, wide_ctx_T<'test_ns'>>>
				/* eslint-enable @typescript-eslint/no-unused-vars */
				const foobar$ = memo_<number, { custom:string }>(
					()=>base_(ctx) + 1,
					[()=>add_count++])
				equal(_ctx.s.test_ns, ctx.s.test_ns)
				foobar$.custom = 'custom-val'
				return foobar$
			}))
	equal(add_count, 0)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx))(), 2)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 2)
	equal(foobar$_(ctx)(), 2)
	equal(foobar_(ctx), 2)
	equal((ctx.s.test_ns.get('foobar')![0] as memo_T<number>)(), 2)
	equal(foobar$_(ctx).custom, 'custom-val')
	equal(add_count, 1)
	base__set(ctx, 2)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx))(), 3)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 3)
	equal(foobar$_(ctx)(), 3)
	equal(foobar_(ctx), 3)
	equal((ctx.s.test_ns.get('foobar')![0] as memo_T<number>)(), 3)
	equal(foobar$_(ctx).custom, 'custom-val')
	equal(add_count, 1)
})
test('ns_be_memo_pair_', ()=>{
	const ctx = ns_ctx__new('test_ns')
	let add_count = 0
	const [
		,
		add_dep_,
		add_dep__set
	] = ns_be_sig_triple_(
		'test_ns',
		()=>1)
	const [
		,
		base_,
		base__set,
	] = ns_be_sig_triple_(
		'test_ns',
		()=>1)
	const [
		foobar$_,
		foobar_,
	] = ns_be_memo_pair_(
		'test_ns',
		ctx=>base_(ctx) + 1,
		[
			(ctx, foobar$)=>memo_(()=>{
				/* eslint-disable @typescript-eslint/no-unused-vars */
				type test_ctx = Expect<Equal<typeof ctx, wide_ctx_T<'test_ns'>>>
				/* eslint-enable @typescript-eslint/no-unused-vars */
				add_count++
				add_dep__set(ctx, add_count + foobar$())
			})
		])
	equal(add_count, 0)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx))(), 2)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 2)
	equal(foobar$_(ctx)(), 2)
	equal(foobar_(ctx), 2)
	equal(add_count, 1)
	equal(add_dep_(ctx), 3)
	base__set(ctx, 2)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx))(), 3)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 3)
	equal(foobar$_(ctx)(), 3)
	equal(foobar_(ctx), 3)
	equal(add_count, 2)
	equal(add_dep_(ctx), 5)
})
test('id_be_memo_pair_', ()=>{
	const ctx = ctx__new()
	let add_count = 0
	const [
		,
		add_dep_,
		add_dep__set
	] = be_sig_triple_(()=>1)
	const [
		,
		base_,
		base__set,
	] = be_sig_triple_(()=>1)
	const [
		foobar$_,
		foobar_,
	] = id_be_memo_pair_(
		'foobar',
		ctx=>base_(ctx) + 1,
		[
			(ctx, foobar$)=>memo_(()=>{
				/* eslint-disable @typescript-eslint/no-unused-vars */
				type test_ctx = Expect<Equal<typeof ctx, wide_ctx_T<''>>>
				/* eslint-enable @typescript-eslint/no-unused-vars */
				add_count++
				add_dep__set(ctx, add_count + foobar$())
			})
		])
	equal(add_count, 0)
	equal(foobar$_(ctx)(), 2)
	equal(foobar_(ctx), 2)
	equal((ctx.s[''].get('foobar')![0] as memo_T<number>)(), 2)
	equal(add_count, 1)
	equal(add_dep_(ctx), 3)
	base__set(ctx, 2)
	equal(foobar$_(ctx)(), 3)
	equal(foobar_(ctx), 3)
	equal((ctx.s[''].get('foobar')![0] as memo_T<number>)(), 3)
	equal(add_count, 2)
	equal(add_dep_(ctx), 5)
})
test('ns_id_be_memo_pair_', ()=>{
	const ctx = ns_ctx__new('test_ns')
	let add_count = 0
	const [
		,
		add_dep_,
		add_dep__set
	] = ns_be_sig_triple_(
		'test_ns',
		()=>1)
	const [
		,
		base_,
		base__set,
	] = ns_be_sig_triple_(
		'test_ns',
		()=>1)
	const [
		foobar$_,
		foobar_,
	] = ns_id_be_memo_pair_(
		'test_ns',
		'foobar',
		ctx=>base_(ctx) + 1,
		[
			(ctx, foobar$)=>memo_(()=>{
				/* eslint-disable @typescript-eslint/no-unused-vars */
				type test_ctx = Expect<Equal<typeof ctx, wide_ctx_T<'test_ns'>>>
				/* eslint-enable @typescript-eslint/no-unused-vars */
				add_count++
				add_dep__set(ctx, add_count + foobar$())
			})
		])
	equal(add_count, 0)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx))(), 2)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 2)
	equal(foobar$_(ctx)(), 2)
	equal(foobar_(ctx), 2)
	equal((ctx.s.test_ns.get('foobar')![0] as memo_T<number>)(), 2)
	equal(add_count, 1)
	equal(add_dep_(ctx), 3)
	base__set(ctx, 2)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx))(), 3)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 3)
	equal(foobar$_(ctx)(), 3)
	equal(foobar_(ctx), 3)
	equal((ctx.s.test_ns.get('foobar')![0] as memo_T<number>)(), 3)
	equal(add_count, 2)
	equal(add_dep_(ctx), 5)
})
test.run()
