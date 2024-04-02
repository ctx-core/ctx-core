import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_, id_be_, ns_be_, ns_id_be_ } from '../be_/index.js'
import { ctx__new, ns_ctx__new } from '../ctx/index.js'
import { be, id_be, ns_be, ns_id_be } from './index.js'
test('be|s|BeMap', ()=>{
	const ctx = ctx__new()
	let incrementer_num = 0
	const incrementer = ()=>++incrementer_num
	const root_ = be_(()=>
		incrementer(),
	{ id: 'root_' })
	const child = be(ctx, ctx=>
		root_(ctx) + incrementer(),
	{ id: 'child' })
	equal(root_(ctx), 1)
	equal(ctx.s[''].get('root_')![0], 1)
	equal(child, 3)
	equal(ctx.s[''].get('child')![0], 3)
})
test('id_be|s|BeMap', ()=>{
	const ctx = ctx__new()
	let incrementer_num = 0
	const incrementer = ()=>++incrementer_num
	const root_ = id_be_(
		'root_',
		()=>incrementer())
	const child = id_be(ctx, 'child', ctx=>
		root_(ctx) + incrementer())
	equal(root_(ctx), 1)
	equal(ctx.s[''].get('root_')![0], 1)
	equal(child, 3)
	equal(ctx.s[''].get('child')![0], 3)
})
test('ns_be|s|BeMap', ()=>{
	const ctx = ns_ctx__new('test_ns')
	let incrementer_num = 0
	const incrementer = ()=>++incrementer_num
	const root_ = ns_be_(
		'test_ns',
		()=>incrementer())
	const child = ns_be(ctx, 'test_ns', ctx=>
		root_(ctx) + incrementer())
	equal(root_(ctx), 1)
	equal(ctx.s.test_ns.get(root_)![0], 1)
	equal(child, 3)
	const child_id = Array.from(ctx.s.test_ns.keys()).find(id=>id!==root_)!
	equal(ctx.s.test_ns.get(child_id)![0], 3)
})
test('ns_id_be|s|BeMap', ()=>{
	const ctx = ns_ctx__new('test_ns')
	let incrementer_num = 0
	const incrementer = ()=>++incrementer_num
	const root_ = ns_id_be_(
		'test_ns',
		'root_',
		()=>incrementer())
	const child = ns_id_be(ctx, 'test_ns', 'child', ctx=>
		root_(ctx) + incrementer())
	equal(root_(ctx), 1)
	equal(ctx.s.test_ns.get('root_')![0], 1)
	equal(child, 3)
	equal(ctx.s.test_ns.get('child')![0], 3)
})
test.run()
