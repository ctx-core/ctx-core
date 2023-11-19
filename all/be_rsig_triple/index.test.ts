import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { ctx__new } from '../ctx/index.js'
import { type readwrite_rmemo_T } from '../rmemo/index.js'
import { be_rsig_triple_ } from './index.js'
test('be_rsig_triple_', ()=>{
	const [
		foobar$_,
		foobar_,
		foobar__set,
	] = be_rsig_triple_(()=>1)
	const ctx = ctx__new()
	equal(foobar$_(ctx)._, 1)
	equal(foobar_(ctx), 1)
	foobar__set(ctx, 2)
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
})
test('be_rsig_triple_|+id|+is_source_|+oninit', ()=>{
	const ctx = ctx__new()
	let subscriber_count = 0
	const [
		foobar$_,
		foobar_,
		foobar__set,
	] = be_rsig_triple_<number, readwrite_rmemo_T<number>&{ custom:string }>(
		()=>1,
		()=>subscriber_count++)
		.config({id: 'foobar', is_source_: map_ctx=>map_ctx === ctx})
		.oninit((_ctx, foobar$)=>{
			equal(_ctx, ctx)
			foobar$.custom = 'custom-val'
		})
	equal(subscriber_count, 0)
	equal(foobar$_([ctx__new(), ctx])._, 1)
	equal(foobar_([ctx__new(), ctx]), 1)
	equal(foobar$_(ctx)._, 1)
	equal(foobar_(ctx), 1)
	equal(subscriber_count, 1)
	equal((ctx.get('foobar') as readwrite_rmemo_T<number>)._, 1)
	equal(foobar$_(ctx).custom, 'custom-val')
	foobar__set([ctx__new(), ctx], 2)
	equal(foobar$_([ctx__new(), ctx])._, 2)
	equal(foobar_([ctx__new(), ctx]), 2)
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
	equal((ctx.get('foobar') as readwrite_rmemo_T<number>)._, 2)
	equal(foobar$_(ctx).custom, 'custom-val')
	equal(subscriber_count, 1)
})
test.run()
