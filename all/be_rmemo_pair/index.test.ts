import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_ } from '../be_/index.js'
import { be_rsig_triple_ } from '../be_rsig_triple/index.js'
import { ctx__new } from '../ctx/index.js'
import type { read_rmemo_T, readwrite_rmemo_T } from '../rmemo/index.js'
import { rmemo_ } from '../rmemo/index.js'
import { be_rmemo_pair_ } from './index.js'
test('be_rmemo_pair_', ()=>{
	const [
		,
		base_,
		base__set,
	] = be_rsig_triple_(()=>1)
	const [
		foobar$_,
		foobar_,
	] = be_rmemo_pair_(ctx=>base_(ctx) + 1)
	const ctx = ctx__new()
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
	base__set(ctx, 2)
	equal(foobar$_(ctx)._, 3)
	equal(foobar_(ctx), 3)
})
test('be_rmemo_pair_|+id|+is_source_|+oninit|+subscriber_a', ()=>{
	const ctx = ctx__new()
	let subscriber_count = 0
	const [
		,
		base_,
		base__set,
	] = be_rsig_triple_(()=>1,
		{ is_source_: map_ctx=>map_ctx === ctx })
	const [
		foobar$_,
		foobar_,
	] = be_rmemo_pair_(ctx=>base_(ctx) + 1,
		()=>subscriber_count++,
		{
			id: 'foobar',
			is_source_: map_ctx=>map_ctx === ctx,
		})
	equal(subscriber_count, 0)
	equal(foobar$_([ctx__new(), ctx])._, 2)
	equal(foobar_([ctx__new(), ctx]), 2)
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
	equal((ctx.get('foobar') as read_rmemo_T<number>)._, 2)
	equal(subscriber_count, 1)
	base__set(ctx, 2)
	equal(foobar$_([ctx__new(), ctx])._, 3)
	equal(foobar_([ctx__new(), ctx]), 3)
	equal(foobar$_(ctx)._, 3)
	equal(foobar_(ctx), 3)
	equal((ctx.get('foobar') as read_rmemo_T<number>)._, 3)
	equal(subscriber_count, 1)
})
test('be_rmemo_pair_|be', ()=>{
	const ctx = ctx__new()
	let subscriber_count = 0
	const [
		,
		base_,
		base__set,
	] = be_rsig_triple_(()=>1,
		{ is_source_: map_ctx=>map_ctx === ctx })
	const [
		foobar$_,
		foobar_,
	] = be_rmemo_pair_<number, custom_rmemo_T>(
		be_(_ctx=>{
			const foobar$ = rmemo_(
				()=>base_(ctx) + 1,
				()=>subscriber_count++
			) as custom_rmemo_T
			if (Array.isArray(_ctx)) equal(_ctx[1], ctx)
			else equal(_ctx, ctx)
			foobar$.custom = 'custom-val'
			return foobar$
		}, {
			id: 'foobar',
			is_source_: map_ctx=>map_ctx === ctx,
		}))
	equal(subscriber_count, 0)
	equal(foobar$_([ctx__new(), ctx])._, 2)
	equal(foobar_([ctx__new(), ctx]), 2)
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
	equal((ctx.get('foobar') as read_rmemo_T<number>)._, 2)
	equal(foobar$_(ctx).custom, 'custom-val')
	equal(subscriber_count, 1)
	base__set(ctx, 2)
	equal(foobar$_([ctx__new(), ctx])._, 3)
	equal(foobar_([ctx__new(), ctx]), 3)
	equal(foobar$_(ctx)._, 3)
	equal(foobar_(ctx), 3)
	equal((ctx.get('foobar') as read_rmemo_T<number>)._, 3)
	equal(foobar$_(ctx).custom, 'custom-val')
	equal(subscriber_count, 1)
})
test.run()
type custom_rmemo_T = readwrite_rmemo_T<number>&{ custom:string }
