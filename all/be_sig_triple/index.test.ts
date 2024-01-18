import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_, type Ctx_wide_T } from '../be_/index.js'
import { ctx__new, ns_ctx__new } from '../ctx/index.js'
import { memo_, sig_, type sig_T } from '../rmemo/index.js'
import type { Equal, Expect } from '../test/index.js'
import { be_sig_triple_, id_be_sig_triple_, ns_be_sig_triple_, ns_id_be_sig_triple_ } from './index.js'
test('be_sig_triple_', ()=>{
	const [
		foobar$_,
		foobar_,
		foobar__set,
	] = be_sig_triple_(_ctx=>{
		/* eslint-disable @typescript-eslint/no-unused-vars */
		type test__ctx = Expect<Equal<typeof _ctx, Ctx_wide_T<''>>>
		/* eslint-enable @typescript-eslint/no-unused-vars */
		equal(_ctx, ctx)
		return 1
	})
	const ctx = ctx__new()
	equal(foobar$_(ctx)._, 1)
	equal(foobar_(ctx), 1)
	foobar__set(ctx, 2)
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
})
test('be_sig_triple_|+id|+ns|+add', ()=>{
	const ctx = ns_ctx__new('test_ns')
	let add_count = 0
	const [
		,
		add_dep_,
		add_dep__set
	] = be_sig_triple_(()=>1,
		{ ns: 'test_ns' })
	const [
		foobar$_,
		foobar_,
		foobar__set,
	] = be_sig_triple_<number, 'test_ns'>(
		ctx=>{
			/* eslint-disable @typescript-eslint/no-unused-vars */
			type test_ctx = Expect<Equal<typeof ctx, Ctx_wide_T<'test_ns'>>>
			/* eslint-enable @typescript-eslint/no-unused-vars */
			return 1
		}, { id: 'foobar', ns: 'test_ns' }
	).add((ctx, foobar$)=>memo_(()=>{
		add_count++
		add_dep__set(ctx, add_count + foobar$())
	}))
	equal(add_count, 0)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx))._, 1)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 1)
	equal(foobar$_(ctx)._, 1)
	equal(foobar_(ctx), 1)
	equal(add_count, 1)
	equal(add_dep_(ctx), 2)
	equal((ctx.s.test_ns.get('foobar')![0] as sig_T<number>)._, 1)
	foobar__set(ns_ctx__new(ctx__new(), ctx), 2)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx))._, 2)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 2)
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
	equal((ctx.s.test_ns.get('foobar')![0] as sig_T<number>)._, 2)
	equal(add_count, 2)
	equal(add_dep_(ctx), 4)
})
test('be_sig_triple_|+be', ()=>{
	const ctx = ns_ctx__new('test_ns')
	let add_count = 0
	const [
		foobar$_,
		foobar_,
		foobar__set,
	] = be_sig_triple_<number, 'test_ns', { custom:string }>(
		be_(ctx=>{
			/* eslint-disable @typescript-eslint/no-unused-vars */
			type test_ctx = Expect<Equal<typeof ctx, Ctx_wide_T<'test_ns'>>>
			/* eslint-enable @typescript-eslint/no-unused-vars */
			const foobar$ =
				sig_<number, { custom:string }>(
					1
				).add(()=>add_count++)
			foobar$.custom = 'custom-val'
			return foobar$
		}, { id: 'foobar', ns: 'test_ns' }))
	equal(add_count, 0)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx))._, 1)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 1)
	equal(foobar$_(ctx)._, 1)
	equal(foobar_(ctx), 1)
	equal(add_count, 1)
	equal((ctx.s.test_ns.get('foobar')![0] as sig_T<number>)._, 1)
	equal(foobar$_(ctx).custom, 'custom-val')
	foobar__set(ns_ctx__new(ctx__new(), ctx), 2)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx))._, 2)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 2)
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
	equal((ctx.s.test_ns.get('foobar')![0] as sig_T<number>)._, 2)
	equal(foobar$_(ctx).custom, 'custom-val')
	equal(add_count, 1)
})
test('ns_be_sig_triple_', ()=>{
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
		foobar$_,
		foobar_,
		foobar__set,
	] = ns_be_sig_triple_(
		'test_ns',
		ctx=>{
			/* eslint-disable @typescript-eslint/no-unused-vars */
			type test_ctx = Expect<Equal<typeof ctx, Ctx_wide_T<'test_ns'>>>
			/* eslint-enable @typescript-eslint/no-unused-vars */
			return 1
		}
	).add((ctx, foobar$)=>memo_(()=>{
		add_count++
		add_dep__set(ctx, add_count + foobar$())
	}))
	equal(add_count, 0)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx))._, 1)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 1)
	equal(foobar$_(ctx)._, 1)
	equal(foobar_(ctx), 1)
	equal(add_count, 1)
	equal(add_dep_(ctx), 2)
	foobar__set(ns_ctx__new(ctx__new(), ctx), 2)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx))._, 2)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 2)
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
	equal(add_count, 2)
	equal(add_dep_(ctx), 4)
})
test('id_be_sig_triple_', ()=>{
	const ctx = ctx__new()
	let add_count = 0
	const [
		,
		add_dep_,
		add_dep__set
	] = id_be_sig_triple_(
		'add_dep',
		()=>1)
	const [
		foobar$_,
		foobar_,
		foobar__set,
	] = id_be_sig_triple_(
		'foobar',
		ctx=>{
			/* eslint-disable @typescript-eslint/no-unused-vars */
			type test_ctx = Expect<Equal<typeof ctx, Ctx_wide_T<''>>>
			/* eslint-enable @typescript-eslint/no-unused-vars */
			return 1
		}
	).add((ctx, foobar$)=>memo_(()=>{
		add_count++
		add_dep__set(ctx, add_count + foobar$())
	}))
	equal(add_count, 0)
	equal(foobar$_(ctx)._, 1)
	equal(foobar_(ctx), 1)
	equal(add_count, 1)
	equal(add_dep_(ctx), 2)
	equal((ctx.s[''].get('foobar')![0] as sig_T<number>)._, 1)
	foobar__set(ctx, 2)
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
	equal((ctx.s[''].get('foobar')![0] as sig_T<number>)._, 2)
	equal(add_count, 2)
	equal(add_dep_(ctx), 4)
})
test('ns_id_be_sig_triple_', ()=>{
	const ctx = ns_ctx__new('test_ns')
	let add_count = 0
	const [
		,
		add_dep_,
		add_dep__set
	] = ns_id_be_sig_triple_(
		'test_ns',
		'app_dep',
		()=>1)
	const [
		foobar$_,
		foobar_,
		foobar__set,
	] = ns_id_be_sig_triple_(
		'test_ns',
		'foobar',
		ctx=>{
			/* eslint-disable @typescript-eslint/no-unused-vars */
			type test_ctx = Expect<Equal<typeof ctx, Ctx_wide_T<'test_ns'>>>
			/* eslint-enable @typescript-eslint/no-unused-vars */
			return 1
		}).add((ctx, foobar$)=>memo_(()=>{
		add_count++
		add_dep__set(ctx, add_count + foobar$())
	}))
	equal(add_count, 0)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx))._, 1)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 1)
	equal(foobar$_(ctx)._, 1)
	equal(foobar_(ctx), 1)
	equal(add_count, 1)
	equal(add_dep_(ctx), 2)
	equal((ctx.s.test_ns.get('foobar')![0] as sig_T<number>)._, 1)
	foobar__set(ns_ctx__new(ctx__new(), ctx), 2)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx))._, 2)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 2)
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
	equal((ctx.s.test_ns.get('foobar')![0] as sig_T<number>)._, 2)
	equal(add_count, 2)
	equal(add_dep_(ctx), 4)
})
test.run()
