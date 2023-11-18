import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_, type MapCtx } from '../be_/index.js'
import { ctx__new } from '../ctx/index.js'
import { rsig_ } from '../rmemo/index.js'
import { be_rsig_triple_ } from './index.js'
test('be_rsig_triple_|+base_name|+rsig__new|+be__params', ()=>{
	const ctx = ctx__new()
	const is_source_ = (map_ctx:MapCtx)=>map_ctx === ctx
	let custom__be__called = false
	const custom__be_ = ((...argv:Parameters<typeof be_>)=>{
		custom__be__called = true
		return be_(...argv)
	}) as typeof be_
	const [
		foobar$_,
		foobar_,
		foobar__set,
	] = be_rsig_triple_(
		'foobar',
		()=>rsig_(1),
		{
			is_source_,
			be_: custom__be_,
		}
	)
	equal(custom__be__called, true)
	equal(foobar$_([ctx__new(), ctx])._, 1)
	equal(foobar_([ctx__new(), ctx]), 1)
	foobar__set([ctx__new(), ctx], 2)
	equal(foobar$_([ctx__new(), ctx])._, 2)
	equal(foobar_([ctx__new(), ctx]), 2)
})
test('be_rsig_triple_|+base_name|+rsig__new|-be__params', ()=>{
	const ctx = ctx__new()
	const [
		foobar$_,
		foobar_,
		foobar__set,
	] = be_rsig_triple_(
		'foobar',
		()=>rsig_(1),
	)
	equal(foobar$_(ctx)._, 1)
	equal(foobar_(ctx), 1)
	foobar__set(ctx, 2)
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
})
test('be_rsig_triple_|+base_name|-rsig__new|+be__params', ()=>{
	const ctx = ctx__new()
	const is_source_ = (map_ctx:MapCtx)=>map_ctx === ctx
	let custom__be__called = false
	const custom__be_ = ((...argv:Parameters<typeof be_>)=>{
		custom__be__called = true
		return be_(...argv)
	}) as typeof be_
	const [
		foobar$_,
		foobar_,
		foobar__set,
	] = be_rsig_triple_('foobar', {
		is_source_,
		be_: custom__be_,
	})
	equal(custom__be__called, true)
	equal(foobar$_([ctx__new(), ctx])._, undefined)
	equal(foobar_([ctx__new(), ctx]), undefined)
	foobar__set([ctx__new(), ctx], 2)
	equal(foobar$_([ctx__new(), ctx])._, 2)
	equal(foobar_([ctx__new(), ctx]), 2)
})
test('be_rsig_triple_|+base_name|-rsig__new|-be__params', ()=>{
	const [
		foobar$_,
		foobar_,
		foobar__set,
	] = be_rsig_triple_('foobar')
	const ctx = ctx__new()
	equal(foobar$_(ctx)._, undefined)
	equal(foobar_(ctx), undefined)
	foobar__set(ctx, 2)
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
})
test('be_rsig_triple_|-base_name|+rsig__new|+be__params', ()=>{
	const ctx = ctx__new()
	const is_source_ = (map_ctx:MapCtx)=>map_ctx === ctx
	let custom__be__called = false
	const custom__be_ = ((...argv:Parameters<typeof be_>)=>{
		custom__be__called = true
		return be_(...argv)
	}) as typeof be_
	const [
		foobar$_,
		foobar_,
		foobar__set,
	] = be_rsig_triple_(
		undefined,
		()=>rsig_(1),
		{
			is_source_,
			be_: custom__be_,
		})
	equal(custom__be__called, true)
	equal(foobar$_([ctx__new(), ctx])._, 1)
	equal(foobar_([ctx__new(), ctx]), 1)
	foobar__set([ctx__new(), ctx], 2)
	equal(foobar$_([ctx__new(), ctx])._, 2)
	equal(foobar_([ctx__new(), ctx]), 2)
})
test('be_rsig_triple_|-base_name|+rsig__new|-be__params', ()=>{
	const [
		foobar$_,
		foobar_,
		foobar__set,
	] = be_rsig_triple_(undefined, ()=>rsig_(1))
	const ctx = ctx__new()
	equal(foobar$_(ctx)._, 1)
	equal(foobar_(ctx), 1)
	foobar__set(ctx, 2)
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
})
test('be_rsig_triple_|-base_name|-rsig__new|+be__params', ()=>{
	const ctx = ctx__new()
	const is_source_ = (map_ctx:MapCtx)=>map_ctx === ctx
	let custom__be__called = false
	const custom__be_ = ((...argv:Parameters<typeof be_>)=>{
		custom__be__called = true
		return be_(...argv)
	}) as typeof be_
	const [
		foobar$_,
		foobar_,
		foobar__set,
	] = be_rsig_triple_({
		is_source_,
		be_: custom__be_,
	})
	equal(custom__be__called, true)
	equal(foobar$_([ctx__new(), ctx])._, undefined)
	equal(foobar_([ctx__new(), ctx]), undefined)
	foobar__set([ctx__new(), ctx], 2)
	equal(foobar$_([ctx__new(), ctx])._, 2)
	equal(foobar_([ctx__new(), ctx]), 2)
})
test('be_rsig_triple_|-base_name|-rsig__new|-be__params', ()=>{
	const [
		foobar$_,
		foobar_,
		foobar__set,
	] = be_rsig_triple_()
	const ctx = ctx__new()
	equal(foobar$_(ctx)._, undefined)
	equal(foobar_(ctx), undefined)
	foobar__set(ctx, 2)
	equal(foobar$_(ctx)._, 2)
	equal(foobar_(ctx), 2)
})
test.run()
