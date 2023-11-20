import { test } from 'uvu'
import { equal } from 'uvu/assert'
import {
	type Be,
	be_,
	be__ctx_,
	be__has_,
	be__val_,
	type Ctx,
	ctx__delete,
	ctx__set,
	type MapCtx
} from '../be_/index.js'
import { ctx__new } from '../ctx/index.js'

test('be_|Map', ()=>{
	const ctx = ctx__new()
	let incrementer_num = 0
	const incrementer = ()=>++incrementer_num
	const root_ = be_(()=>incrementer(), { id: 'root_' })
	const child_ = be_(ctx=>root_(ctx) + incrementer(), { id: 'child_' })
	const child1_ = be_(ctx=>root_(ctx) + child_(ctx), { id: 'child1_' })
	equal(root_(ctx), 1)
	equal(ctx.get('root_'), 1)
	equal(child_(ctx), 3)
	equal(ctx.get('child_'), 3)
	equal(child1_(ctx), 4)
	equal(ctx.get('child1_'), 4)
})
test('be_|simple array', ()=>{
	const ctx0 = ctx__new()
	const ctx1 = ctx__new()
	const ctx = [ctx0, ctx1]
	const root_ = be_(()=>1, { id: 'root_' })
	equal(root_(ctx1), 1)
	equal(root_(ctx), 1)
	equal(ctx0.has(root_), false)
	equal(ctx1.has(root_), true)
	const child_ = be_(ctx=>root_(ctx) + 1, { id: 'child_' })
	equal(child_(ctx), 2)
	equal(ctx0.has(child_), true)
	equal(ctx1.has(child_), false)
})
test('be_|nested array', ()=>{
	const ctx0 = ctx__new()
	const ctx1 = ctx__new()
	const ctx2 = ctx__new()
	const ctx3 = ctx__new()
	const ctx = [[[ctx0], ctx1], [ctx2, ctx3]]
	const root_ = be_(()=>1, { id: 'root_' })
	equal(root_(ctx3), 1)
	equal(root_(ctx), 1)
	equal(ctx0.has(root_), false)
	equal(ctx1.has(root_), false)
	equal(ctx2.has(root_), false)
	equal(ctx3.has(root_), true)
	const child_ = be_(ctx=>root_(ctx) + 1, { id: 'child_' })
	equal(child_(ctx), 2)
	equal(ctx0.has(child_), true)
	equal(ctx1.has(child_), false)
	equal(ctx2.has(child_), false)
	equal(ctx3.has(child_), false)
})
test('be_|is_source_', ()=>{
	const ctx0 = ctx__new()
	const ctx1 = ctx__new()
	ctx1.set('matching', true)
	const ctx = [ctx0, ctx1]
	const be__ctx_a:Ctx[] = []
	const root_ = be_(ctx=>{
		be__ctx_a.push(ctx)
		return 1
	}, {
		is_source_: map_ctx=>!!map_ctx.get('matching'),
		id: 'root_'
	})
	equal(root_(ctx), 1)
	equal(be__ctx_a, [[ctx0, ctx1]])
	equal(ctx0.has(root_), false)
	equal(ctx1.has(root_), true)
})
test('be_|Ctx generic type', ()=>{
	const valid_ctx = ctx__new() as test_ctx_T
	const val_ = be_<boolean, test_ctx_T>(()=>true, { id: 'val_' })
	val_(valid_ctx)
	// val_(ctx_()) // type error
})
test('be_|Ctx|NestedMapCtx', ()=>{
	const ctx0 = ctx__new()
	const ctx1 = ctx__new()
	ctx1.set('matching', true)
	const ctx = [ctx0, ctx1]
	const nested__ctx_ = be_<Ctx>(ctx=>[ctx], { id: 'nested__ctx_' })
	equal(nested__ctx_(ctx), [[ctx0, ctx1]])
})
test('be_|circular dependency', ()=>{
	const be0:Be<symbol> = be_(ctx=>be1(ctx))
	const be1:Be<symbol> = be_(ctx=>be0(ctx))
	const ctx = ctx__new()
	equal(String(be0(ctx)), 'Symbol(cir)')
	equal(String(be1(ctx)), 'Symbol(cir)')
})
test('ctx__set', ()=>{
	const ctx0 = ctx__new()
	ctx__set(ctx0, 'key', 1)
	equal(ctx0.get('key'), 1)
	const ctx1 = ctx__new()
	const ctx_a = [ctx1, ctx0]
	ctx__set(ctx_a, 'key', 2,
		(map_ctx:MapCtx)=>map_ctx.get('key') != null)
	equal(ctx0.get('key'), 2)
	equal(ctx1.has('key'), false)
})
test('ctx__delete|id', ()=>{
	const ctx0 = ctx__new()
	ctx__delete(ctx0, 'key')
	equal(ctx0.has('key'), false)
	ctx0.set('key', true)
	equal(ctx0.get('key'), true)
	ctx__delete(ctx0, 'key')
	equal(ctx0.has('key'), false)
	const ctx1 = ctx__new()
	const nested__ctx = [ctx0, ctx1]
	ctx0.set('key', true)
	ctx1.set('key', true)
	equal(ctx0.get('key'), true)
	equal(ctx1.get('key'), true)
	ctx__delete(nested__ctx, 'key')
	equal(ctx0.has('key'), false)
	equal(ctx1.has('key'), false)
})
test('ctx__delete|be', ()=>{
	const ctx0 = ctx__new()
	const num_ = be_(()=>1)
	ctx__delete(ctx0, num_)
	equal(ctx0.has(num_), false)
	num_(ctx0)
	equal(ctx0.has(num_), true)
	ctx__delete(ctx0, num_)
	equal(ctx0.has(num_), false)
	num_(ctx0)
	equal(ctx0.has(num_), true)
	ctx__delete(ctx0, num_)
	equal(ctx0.has(num_), false)
	const ctx1 = ctx__new()
	ctx1.set('ctx1', true)
	const nested__ctx = [ctx0, ctx1]
	num_(ctx0)
	num_(ctx1)
	equal(ctx0.has(num_), true)
	equal(ctx1.has(num_), true)
	ctx__delete(nested__ctx, num_)
	equal(ctx0.has(num_), false)
	equal(ctx1.has(num_), false)
	num_(ctx0)
	num_(ctx1)
	equal(ctx0.has(num_), true)
	equal(ctx1.has(num_), true)
	ctx__delete(nested__ctx, num_)
	equal(ctx0.has(num_), false)
	equal(ctx1.has(num_), false)
	const is_source__num_ =
		be_(()=>1, { is_source_: ctx=>!!ctx.get('ctx1') })
	is_source__num_(nested__ctx)
	equal(ctx0.has(is_source__num_), false)
	equal(ctx1.has(is_source__num_), true)
	ctx__delete(nested__ctx, is_source__num_)
	equal(ctx0.has(is_source__num_), false)
	equal(ctx1.has(is_source__num_), false)
	is_source__num_(nested__ctx)
	equal(ctx0.has(is_source__num_), false)
	equal(ctx1.has(is_source__num_), true)
	ctx__delete(nested__ctx, is_source__num_)
	equal(ctx0.has(is_source__num_), false)
	equal(ctx1.has(is_source__num_), false)
})
test('be__has_', ()=>{
	const ctx0 = ctx__new()
	ctx__delete(ctx0, 'key')
	equal(be__has_('key', ctx0), false)
	ctx0.set('key', true)
	equal(be__has_('key', ctx0), true)
	ctx__delete(ctx0, 'key')
	equal(be__has_('key', ctx0), false)
	const ctx1 = ctx__new()
	const nested__ctx = [ctx0, ctx1]
	ctx1.set('key', true)
	equal(be__has_('key', nested__ctx), true)
})
test('be__ctx_', ()=>{
	const ctx0 = ctx__new()
	ctx__delete(ctx0, 'key')
	equal(be__ctx_('key', ctx0), undefined)
	ctx0.set('key', true)
	equal(be__ctx_('key', ctx0), ctx0)
	ctx__delete(ctx0, 'key')
	equal(be__ctx_('key', ctx0), undefined)
	const ctx1 = ctx__new()
	const nested__ctx = [ctx0, ctx1]
	ctx1.set('key', true)
	equal(be__ctx_('key', nested__ctx), ctx1)
})
test('be__val_', ()=>{
	const ctx = ctx__new()
	const val_ = be_<boolean>(()=>true, { id: 'val_' })
	equal(val_(ctx), true)
	equal(ctx.get(val_), true)
	equal(be__val_(val_, ctx), true)
	ctx__set(ctx, val_, false)
	equal(val_(ctx), false)
	equal(be__val_(val_, ctx), false)
})
test.run()
declare const test_ctx_sym:unique symbol
type test_ctx_T = Ctx&{
	[test_ctx_sym]:any
}
