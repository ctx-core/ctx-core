import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_ } from '../be_/index.js'
import { ctx__new } from '../ctx/index.js'
import { type rw_rmemo_T, rw_rmemo_ } from '../rmemo/index.js'
import { be_rw_rmemo_triple_ } from './index.js'
test('be_rw_rmemo_triple_', ()=>{
	const [
		foobar$_,
		foobar_,
		foobar__set,
	] = be_rw_rmemo_triple_(()=>1)
	const ctx = ctx__new()
	equal(foobar$_(ctx)._, 1)
	equal(foobar_(ctx), 1)
	foobar__set(ctx, 2)
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
})
test('be_rw_rmemo_triple_|+id|+is_source_', ()=>{
	const ctx = ctx__new()
	let subscriber_count = 0
	const [
		foobar$_,
		foobar_,
		foobar__set,
	] = be_rw_rmemo_triple_(
		()=>1,
		()=>subscriber_count++,
		{ id: 'foobar', is_source_: map_ctx=>map_ctx === ctx },)
	equal(subscriber_count, 0)
	equal(foobar$_([ctx__new(), ctx])._, 1)
	equal(foobar_([ctx__new(), ctx]), 1)
	equal(foobar$_(ctx)._, 1)
	equal(foobar_(ctx), 1)
	equal(subscriber_count, 1)
	equal((ctx.get('foobar') as rw_rmemo_T<number>)._, 1)
	foobar__set([ctx__new(), ctx], 2)
	equal(foobar$_([ctx__new(), ctx])._, 2)
	equal(foobar_([ctx__new(), ctx]), 2)
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
	equal((ctx.get('foobar') as rw_rmemo_T<number>)._, 2)
	equal(subscriber_count, 1)
})
test('be_rw_rmemo_triple_|+be', ()=>{
	const ctx = ctx__new()
	let subscriber_count = 0
	const [
		foobar$_,
		foobar_,
		foobar__set,
	] = be_rw_rmemo_triple_<number, custom_rw_rmemo_T>(
		be_(()=>{
			const foobar$ =
				rw_rmemo_(1, ()=>subscriber_count++) as custom_rw_rmemo_T
			foobar$.custom = 'custom-val'
			return foobar$
		}, { id: 'foobar', is_source_: map_ctx=>map_ctx === ctx }))
	equal(subscriber_count, 0)
	equal(foobar$_([ctx__new(), ctx])._, 1)
	equal(foobar_([ctx__new(), ctx]), 1)
	equal(foobar$_(ctx)._, 1)
	equal(foobar_(ctx), 1)
	equal(subscriber_count, 1)
	equal((ctx.get('foobar') as rw_rmemo_T<number>)._, 1)
	equal(foobar$_(ctx).custom, 'custom-val')
	foobar__set([ctx__new(), ctx], 2)
	equal(foobar$_([ctx__new(), ctx])._, 2)
	equal(foobar_([ctx__new(), ctx]), 2)
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
	equal((ctx.get('foobar') as rw_rmemo_T<number>)._, 2)
	equal(foobar$_(ctx).custom, 'custom-val')
	equal(subscriber_count, 1)
})
test.run()
type custom_rw_rmemo_T = rw_rmemo_T<number>&{ custom:string }
