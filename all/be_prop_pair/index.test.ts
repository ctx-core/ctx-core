import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_, type MapCtx } from '../be_/index.js'
import { be_prop_pair_ } from '../be_prop_pair/index.js'
import { ctx__new } from '../ctx/index.js'
test('be_prop_pair_|+base_name|+atom__new|+be__params', ()=>{
	const ctx = ctx__new()
	const is_source_ = (map_ctx:MapCtx)=>map_ctx === ctx
	let custom__be__called = false
	const custom__be_ = ((...argv:Parameters<typeof be_>)=>{
		custom__be__called = true
		return be_(...argv)
	}) as typeof be_
	const [
		foobar_,
		foobar__set,
	] = be_prop_pair_(
		'foobar',
		()=>1,
		{
			is_source_,
			be_: custom__be_,
		}
	)
	equal(custom__be__called, true)
	equal(foobar_([ctx__new(), ctx]), 1)
	foobar__set([ctx__new(), ctx], 2)
	equal(foobar_([ctx__new(), ctx]), 2)
})
test('be_prop_pair_|+base_name|+atom__new|-be__params', ()=>{
	const ctx = ctx__new()
	const [
		foobar_,
		foobar__set,
	] = be_prop_pair_(
		'foobar',
		()=>1,
	)
	equal(foobar_(ctx), 1)
	foobar__set(ctx, 2)
	equal(foobar_(ctx), 2)
})
test('be_prop_pair_|+base_name|-atom__new|+be__params', ()=>{
	const ctx = ctx__new()
	const is_source_ = (map_ctx:MapCtx)=>map_ctx === ctx
	let custom__be__called = false
	const custom__be_ = ((...argv:Parameters<typeof be_>)=>{
		custom__be__called = true
		return be_(...argv)
	}) as typeof be_
	const [
		foobar_,
		foobar__set,
	] = be_prop_pair_('foobar', {
		is_source_,
		be_: custom__be_,
	})
	equal(custom__be__called, true)
	equal(foobar_([ctx__new(), ctx]), null)
	foobar__set([ctx__new(), ctx], 2)
	equal(foobar_([ctx__new(), ctx]), 2)
})
test('be_prop_pair_|+base_name|-atom__new|-be__params', ()=>{
	const [
		foobar_,
		foobar__set,
	] = be_prop_pair_('foobar')
	const ctx = ctx__new()
	equal(foobar_(ctx), null)
	foobar__set(ctx, 2)
	equal(foobar_(ctx), 2)
})
test('be_prop_pair_|-base_name|+atom__new|+be__params', ()=>{
	const ctx = ctx__new()
	const is_source_ = (map_ctx:MapCtx)=>map_ctx === ctx
	let custom__be__called = false
	const custom__be_ = ((...argv:Parameters<typeof be_>)=>{
		custom__be__called = true
		return be_(...argv)
	}) as typeof be_
	const [
		foobar_,
		foobar__set,
	] = be_prop_pair_(
		undefined,
		()=>1,
		{
			is_source_,
			be_: custom__be_,
		})
	equal(custom__be__called, true)
	equal(foobar_([ctx__new(), ctx]), 1)
	foobar__set([ctx__new(), ctx], 2)
	equal(foobar_([ctx__new(), ctx]), 2)
})
test('be_prop_pair_|-base_name|+atom__new|-be__params', ()=>{
	const [
		foobar_,
		foobar__set,
	] = be_prop_pair_(undefined, ()=>
		1)
	const ctx = ctx__new()
	equal(foobar_(ctx), 1)
	foobar__set(ctx, 2)
	equal(foobar_(ctx), 2)
})
test('be_prop_pair_|-base_name|-atom__new|+be__params', ()=>{
	const ctx = ctx__new()
	const is_source_ = (map_ctx:MapCtx)=>map_ctx === ctx
	let custom__be__called = false
	const custom__be_ = ((...argv:Parameters<typeof be_>)=>{
		custom__be__called = true
		return be_(...argv)
	}) as typeof be_
	const [
		foobar_,
		foobar__set,
	] = be_prop_pair_({
		is_source_,
		be_: custom__be_,
	})
	equal(custom__be__called, true)
	equal(foobar_([ctx__new(), ctx]), null)
	foobar__set([ctx__new(), ctx], 2)
	equal(foobar_([ctx__new(), ctx]), 2)
})
test('be_prop_pair_|-base_name|-atom__new|-be__params', ()=>{
	const [
		foobar_,
		foobar__set,
	] = be_prop_pair_()
	const ctx = ctx__new()
	equal(foobar_(ctx), null)
	foobar__set(ctx, 2)
	equal(foobar_(ctx), 2)
})
test.run()
