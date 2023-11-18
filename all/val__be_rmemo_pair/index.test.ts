import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_, type MapCtx } from '../be_/index.js'
import { ctx__new } from '../ctx/index.js'
import { val__be_rsig_triple_ } from '../val__be_rsig_triple/index.js'
import { val__be_rmemo_pair_ } from './index.js'
test('val__be_rmemo_pair_|+base_name|+rmemo__new|+be__params', ()=>{
	const ctx = ctx__new()
	const is_source_ = (map_ctx:MapCtx)=>map_ctx === ctx
	const [
		_base$_,
		base_,
		base__set,
	] = val__be_rsig_triple_(()=>1, {
		is_source_
	})
	let custom__be__called = false
	const custom__be_ = ((...argv:Parameters<typeof be_>)=>{
		custom__be__called = true
		return be_(...argv)
	}) as typeof be_
	const [
		foobar$_,
		foobar_,
	] = val__be_rmemo_pair_(
		'foobar',
		ctx=>
			base_(ctx) + 1,
		{
			is_source_,
			be_: custom__be_,
		})
	equal(custom__be__called, true)
	equal(foobar$_([ctx__new(), ctx])._, 2)
	equal(foobar_([ctx__new(), ctx]), 2)
	base__set(ctx, 2)
	equal(foobar$_([ctx__new(), ctx])._, 3)
	equal(foobar_([ctx__new(), ctx]), 3)
})
test('val__be_rmemo_pair_|+base_name|+rmemo__new|-be__params', ()=>{
	const [
		_base$_,
		base_,
		base__set,
	] = val__be_rsig_triple_(()=>1)
	const [
		foobar$_,
		foobar_,
	] = val__be_rmemo_pair_(
		'foobar',
		ctx=>
			base_(ctx) + 1)
	const ctx = ctx__new()
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
	base__set(ctx, 2)
	equal(foobar$_(ctx)._, 3)
	equal(foobar_(ctx), 3)
})
test('val__be_rmemo_pair_|-base_name|+rmemo__new|+be__params', ()=>{
	const ctx = ctx__new()
	const is_source_ = (map_ctx:MapCtx)=>map_ctx === ctx
	const [
		_base$_,
		base_,
		base__set,
	] = val__be_rsig_triple_(
		()=>1,
		{
			is_source_
		})
	let custom__be__called = false
	const custom__be_ = ((...argv:Parameters<typeof be_>)=>{
		custom__be__called = true
		return be_(...argv)
	}) as typeof be_
	const [
		foobar$_,
		foobar_,
	] = val__be_rmemo_pair_(
		ctx=>base_(ctx) + 1,
		{
			is_source_,
			be_: custom__be_,
		})
	equal(custom__be__called, true)
	equal(foobar$_([ctx__new(), ctx])._, 2)
	equal(foobar_([ctx__new(), ctx]), 2)
	base__set(ctx, 2)
	equal(base_(ctx), 2)
	equal(foobar$_(ctx)._, 3)
	equal(foobar$_([ctx__new(), ctx])._, 3)
	equal(foobar_([ctx__new(), ctx]), 3)
})
test('val__be_rmemo_pair_|-base_name|+rmemo__new|-be__params', ()=>{
	const [
		_base$_,
		base_,
		base__set,
	] = val__be_rsig_triple_(()=>1)
	const [
		foobar$_,
		foobar_,
	] = val__be_rmemo_pair_(
		ctx=>base_(ctx) + 1)
	const ctx = ctx__new()
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
	base__set(ctx, 2)
	equal(foobar$_(ctx)._, 3)
	equal(foobar_(ctx), 3)
})
test.run()
