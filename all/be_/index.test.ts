import { test } from 'uvu'
import { equal, is, throws } from 'uvu/assert'
import {
	type Be,
	be_,
	be__has_,
	be__val_,
	be_map__find,
	type BeMapO,
	type Ctx,
	ctx__delete,
	ctx__set,
	type Ctx_s_T,
	type Ctx_s_wide_T,
	type Ctx_wide_T,
	globalThis__be_
} from '../be_/index.js'
import { ctx_, ctx__new, ns_ctx__new } from '../ctx/index.js'
import { Equal, Expect } from '../test/index.js'
test.after(()=>{
	delete (globalThis as { root_be?:Be<unknown> }).root_be
})
test('globalThis__be_', ()=>{
	const ctx = ctx__new()
	const be = globalThis__be_(()=>1, { id: 'root_be' })
	equal(be(ctx), 1)
	const be2 = globalThis__be_(()=>1, { id: 'root_be' })
	equal(be2(ctx), 1)
})
test('be_|s|BeMap', ()=>{
	const ctx = ctx__new()
	let incrementer_num = 0
	const incrementer = ()=>++incrementer_num
	const root_ = be_(()=>
		incrementer(),
	{ id: 'root_' })
	const child_ = be_(ctx=>
		root_(ctx) + incrementer(),
	{ id: 'child_' })
	const child1_ = be_(ctx=>
		root_(ctx) + child_(ctx),
	{ id: 'child1_' })
	equal(root_(ctx), 1)
	equal(ctx.s[''].get('root_'), 1)
	equal(child_(ctx), 3)
	equal(ctx.s[''].get('child_'), 3)
	equal(child1_(ctx), 4)
	equal(ctx.s[''].get('child1_'), 4)
})
test('be_|ns_ctx__new|-ns', ()=>{
	const ctx0 = ctx__new()
	const ctx1 = ctx__new()
	const ctx = ns_ctx__new(ctx0, ctx1)
	const root_ = be_(()=>
		1,
	{ id: 'root_' })
	equal(root_(ctx1), 1)
	equal(root_(ctx), 1)
	equal(ctx0.s[''].has(root_.id), true)
	equal(ctx1.s[''].has(root_.id), true)
	const child_ = be_(ctx=>
		root_(ctx) + 1,
	{ id: 'child_' })
	equal(child_(ctx), 2)
	equal(ctx0.s[''].has(child_.id), true)
	equal(ctx1.s[''].has(child_.id), false)
})
test('be_|source_ctx__new', ()=>{
	const ctx0 = ctx__new()
	const ctx1 = ctx__new()
	const ctx2 = ctx__new()
	const ctx3 = ctx__new()
	const ctx = ns_ctx__new(ctx0, ctx1, ctx2, ctx3)
	const root_ = be_(()=>
		1,
	{ id: 'root_' })
	equal(root_(ctx3), 1)
	equal(root_(ctx), 1)
	equal(ctx0.s[''].has(root_.id), true)
	equal(ctx1.s[''].has(root_.id), false)
	equal(ctx2.s[''].has(root_.id), false)
	equal(ctx3.s[''].has(root_.id), true)
	const child_ = be_(ctx=>root_(ctx) + 1, { id: 'child_' })
	equal(child_(ctx), 2)
	equal(ctx0.s[''].has(child_.id), true)
	equal(ctx1.s[''].has(child_.id), false)
	equal(ctx2.s[''].has(child_.id), false)
	equal(ctx3.s[''].has(child_.id), false)
})
test('be_|ns', ()=>{
	/* eslint-disable @typescript-eslint/no-unused-vars */
	const ctx0 = ctx__new()
	const ctx1 = ns_ctx__new('ctx1')
	const ctx = ns_ctx__new(ctx0, ctx1)
	const be__ctx_a:Ctx_wide_T<'ctx1'>[] = []
	const root_ = be_(ctx=>{
		be__ctx_a.push(ctx)
		return 1
	}, {
		ns: 'ctx1',
		id: 'root_'
	})
	equal(root_(ctx), 1)
	equal(be__ctx_a, [ctx])
	// @ts-expect-error TS2322
	equal(ctx0.s[''].has(root_.id), false)
	// @ts-expect-error TS2322
	equal(ctx1.s[''], undefined)
	equal(ctx1.s['ctx1'].has(root_.id), true)
})
test('be_|ns|types', ()=>{
	/* eslint-disable @typescript-eslint/no-unused-vars */
	const ctx0 = ctx__new()
	type test_ctx0_s = Expect<Equal<typeof ctx0.s, Ctx_s_T<''>>>
	// @ts-expect-error TS2345
	type test_ctx0_s_fail = Expect<Equal<typeof ctx0.s, Ctx_s_T<'fail'>>>
	type test_ctx0 = Expect<Equal<typeof ctx0, Ctx<''>>>
	// @ts-expect-error TS2345
	type test_ctx0_fail = Expect<Equal<typeof ctx0, Ctx<'fail'>>>
	const ctx1 = ns_ctx__new('ctx1')
	type test_ctx1_s = Expect<Equal<typeof ctx1.s, Ctx_s_T<'ctx1'>>>
	// @ts-expect-error TS2345
	type test_ctx1_fail = Expect<Equal<typeof ctx1, Ctx<'fail'>>>
	// @ts-expect-error TS2345
	type test_ctx1_s_fail = Expect<Equal<typeof ctx1, Ctx_s_T<''|'fail'>>>
	type test_ctx1_w_empty_string = Expect<Equal<typeof ctx1, Ctx<'ctx1'>>>
	type test_ctx1 = Expect<Equal<typeof ctx1, Ctx<'ctx1'>>>
	const ctx = ns_ctx__new(ctx0, ctx1)
	type test_ctx_s_wide_T = Expect<Equal<
		typeof ctx.s, typeof ctx extends Ctx_s_wide_T<''|'ctx1'>
		? typeof ctx.s
		: never>>
	type test_ctx_s_BeMapO = Expect<Equal<
		typeof ctx.s, typeof ctx.s extends BeMapO<''|'ctx1'>
		? typeof ctx.s
		: never>>
	type test_ctx_s = Expect<Equal<typeof ctx.s, Ctx_s_T<''|'ctx1'>>>
	type test_ctx_extends = Expect<Equal<
		typeof ctx, typeof ctx extends Ctx_wide_T<''|'ctx1'>
		? typeof ctx
		: never>>
	type test_ctx_Ctx = Expect<Equal<typeof ctx, Ctx<''|'ctx1'>>>
	const root_ = be_(
		ctx=>{
			type test_be_ctx_argument = Expect<Equal<typeof ctx, Ctx_wide_T<'ctx1'>>>
			return 1
		}, {
			ns: 'ctx1',
			id: 'root_'
		})
	/* eslint-enable @typescript-eslint/no-unused-vars */
})
test('be_|Ctx generic type', ()=>{
	const valid_ctx = ns_ctx__new('test_ns')
	const val_ = be_<boolean, 'test_ns'>(()=>
		true,
	{ id: 'val_', ns: 'test_ns' })
	val_(valid_ctx)
	// @ts-expect-error TS2322
	throws(()=>val_(ctx_()))
})
test('be_|Ctx|ns', ()=>{
	const ctx0 = ctx__new()
	const ctx1 = ctx__new()
	ctx1.s[''].set('matching', true)
	const ctx = ns_ctx__new(ctx0, ctx1)
	const nested__ctx_ = be_<[Ctx]>(ctx=>
		[ctx],
	{ id: 'nested__ctx_' })
	equal(nested__ctx_(ctx), [ctx])
})
test('be_|circular dependency', ()=>{
	const be0:Be<symbol> = be_(ctx=>be1(ctx))
	const be1:Be<symbol> = be_(ctx=>be0(ctx))
	const ctx = ctx__new()
	equal(be0(ctx), 'cir')
	equal(be1(ctx), 'cir')
})
test('ctx__set', ()=>{
	const ctx0 = ns_ctx__new('ctx0')
	const ctx1 = ctx__new()
	const source_ctx = ns_ctx__new(ctx1, ctx0)
	ctx__set(source_ctx, 'key', 2, 'ctx0')
	// @ts-expect-error TS7053
	equal(ctx0.s[''], undefined)
	equal(ctx0.s['ctx0'].get('key'), 2)
	equal(ctx1.s[''].has('key'), false)
	ctx__set(source_ctx, 'key', 1)
	// @ts-expect-error TS7053
	equal(ctx0.s[''], undefined)
	equal(ctx0.s['ctx0'].get('key'), 2)
	equal(ctx1.s[''].get('key'), 1)
})
test('ctx__delete|id', ()=>{
	const ctx0 = ctx__new()
	ctx__delete(ctx0, 'key')
	equal(ctx0.s[''].has('key'), false)
	ctx0.s[''].set('key', true)
	equal(ctx0.s[''].get('key'), true)
	ctx__delete(ctx0, 'key')
	equal(ctx0.s[''].has('key'), false)
	const ctx1 = ctx__new()
	const source_ctx = ns_ctx__new(ctx0, ctx1, 'test_source')
	ctx0.s[''].set('key', true)
	ctx1.s[''].set('key', true)
	equal(ctx0.s[''].get('key'), true)
	equal(ctx1.s[''].get('key'), true)
	ctx__delete(source_ctx, 'key')
	equal(ctx0.s[''].has('key'), false)
	equal(ctx1.s[''].has('key'), true)
	source_ctx.s['test_source'].set('key', true)
	equal(source_ctx.s['test_source'].get('key'), true)
	ctx__delete(source_ctx, 'key')
	equal(source_ctx.s['test_source'].get('key'), true)
	ctx__delete(source_ctx, 'key', 'test_source')
	equal(source_ctx.s['test_source'].has('key'), false)
})
test('ctx__delete|be', ()=>{
	const ctx0 = ctx__new()
	const num_ = be_(()=>1)
	ctx__delete(ctx0, num_)
	equal(ctx0.s[''].has(num_.id), false)
	num_(ctx0)
	equal(ctx0.s[''].has(num_.id), true)
	ctx__delete(ctx0, num_)
	equal(ctx0.s[''].has(num_.id), false)
	num_(ctx0)
	equal(ctx0.s[''].has(num_.id), true)
	ctx__delete(ctx0, num_)
	equal(ctx0.s[''].has(num_.id), false)
	const ctx1 = ns_ctx__new('ctx1')
	const ns_ctx = ns_ctx__new(ctx0, ctx1)
	num_(ctx0)
	// @ts-expect-error TS7053
	throws(()=>num_(ctx1), Error(`ctx_no_ns: 'ctx1'`))
	equal(ctx0.s[''].has(num_.id), true)
	// @ts-expect-error TS7053
	equal(ctx1.s[''], undefined)
	ctx__delete(ns_ctx, num_)
	equal(ctx0.s[''].has(num_.id), false)
	// @ts-expect-error TS7053
	equal(ctx1.s[''], undefined)
	num_(ctx0)
	// @ts-expect-error TS7053
	throws(()=>num_(ctx1), `ctx_no_ns: 'ctx1'`)
	equal(ctx0.s[''].has(num_.id), true)
	// @ts-expect-error TS7053
	equal(ctx1.s[''], undefined)
	ctx__delete(ns_ctx, num_)
	equal(ctx0.s[''].has(num_.id), false)
	// @ts-expect-error TS7053
	equal(ctx1.s[''], undefined)
	const is_source__num_ =
		be_(()=>1,
			{ ns: 'ctx1' })
	is_source__num_(ns_ctx)
	// @ts-expect-error TS2345
	equal(ctx0.s[''].has(is_source__num_.id), false)
	// @ts-expect-error TS7053
	equal(ctx1.s[''], undefined)
	equal(ctx1.s['ctx1'].has(is_source__num_.id), true)
	ctx__delete(ns_ctx, is_source__num_)
	// @ts-expect-error TS2345
	equal(ctx0.s[''].has(is_source__num_.id), false)
	// @ts-expect-error TS7053
	equal(ctx1.s[''], undefined)
	equal(ctx1.s['ctx1'].has(is_source__num_.id), false)
	is_source__num_(ns_ctx)
	// @ts-expect-error TS2345
	equal(ctx0.s[''].has(is_source__num_.id), false)
	// @ts-expect-error TS7053
	equal(ctx1.s[''], undefined)
	equal(ctx1.s['ctx1'].has(is_source__num_.id), true)
	ctx__delete(ns_ctx, is_source__num_)
	// @ts-expect-error TS2345
	equal(ctx0.s[''].has(is_source__num_.id), false)
	// @ts-expect-error TS7053
	equal(ctx1.s[''], undefined)
	equal(ctx1.s['ctx1'].has(is_source__num_.id), false)
	is_source__num_(ns_ctx)
	// @ts-expect-error TS2345
	equal(ctx0.s[''].has(is_source__num_.id), false)
	// @ts-expect-error TS7053
	equal(ctx1.s[''], undefined)
	equal(ctx1.s['ctx1'].has(is_source__num_.id), true)
	ctx__delete(ns_ctx, is_source__num_, '')
	// @ts-expect-error TS2345
	equal(ctx0.s[''].has(is_source__num_.id), false)
	// @ts-expect-error TS7053
	equal(ctx1.s[''], undefined)
	equal(ctx1.s['ctx1'].has(is_source__num_.id), true)
})
test('be__has_', ()=>{
	const ctx0 = ctx__new()
	ctx__delete(ctx0, 'key')
	equal(be__has_('key', ctx0), false)
	ctx0.s[''].set('key', true)
	equal(be__has_('key', ctx0), true)
	ctx__delete(ctx0, 'key')
	equal(be__has_('key', ctx0), false)
	const ctx1 = ctx__new()
	const source_ctx = ns_ctx__new(ctx0, ctx1, 'test_source')
	ctx1.s[''].set('key', true)
	equal(be__has_('key', source_ctx), false)
	equal(be__has_('key', source_ctx, 'test_source'), false)
	ctx0.s[''].set('key', true)
	equal(be__has_('key', source_ctx), true)
	equal(be__has_('key', source_ctx, 'test_source'), false)
	source_ctx.s.test_source.set('key', true)
	equal(be__has_('key', source_ctx, 'test_source'), true)
})
test('be_map__find', ()=>{
	const ctx0 = ctx__new()
	const be_map0 = ctx0.s['']
	ctx__delete(ctx0, 'key')
	equal(be_map__find('key', ctx0), undefined)
	ctx0.s[''].set('key', true)
	equal(be_map__find('key', ctx0), be_map0)
	ctx__delete(ctx0, 'key')
	equal(be_map__find('key', ctx0), undefined)
	const ctx1 = ctx__new()
	const be_map1 = ctx1.s['']
	const source_ctx = ns_ctx__new(ctx0, ctx1, 'test_source')
	is.not(source_ctx.s.test_source, be_map0)
	is.not(source_ctx.s.test_source, be_map1)
	ctx1.s[''].set('key', true)
	equal(be_map__find('key', source_ctx), undefined)
	equal(be_map__find('key', source_ctx, 'test_source'), undefined)
	ctx0.s[''].set('key', true)
	equal(be_map__find('key', source_ctx), be_map0)
	equal(be_map__find('key', source_ctx, 'test_source'), undefined)
	source_ctx.s.test_source.set('key', true)
	equal(be_map__find('key', source_ctx, 'test_source'), source_ctx.s.test_source)
})
test('be__val_', ()=>{
	const ctx0 = ctx__new()
	const ctx1 = ctx__new()
	const source_ctx = ns_ctx__new(ctx0, ctx1, 'test_source')
	const val_ = be_<boolean>(()=>
		true,
	{ id: 'val_' })
	equal(val_(source_ctx), true)
	equal(source_ctx.s[''].get(val_.id), true)
	equal(be__val_(val_, source_ctx), true)
	equal(be__val_('val_', source_ctx), true)
	ctx__set(source_ctx, val_, false)
	equal(val_(source_ctx), false)
	equal(be__val_(val_, source_ctx), false)
	equal(be__val_('val_', source_ctx), false)
	equal(be__val_(val_, source_ctx, 'test_source'), undefined)
	equal(be__val_('val_', source_ctx, 'test_source'), undefined)
	source_ctx.s.test_source.set('val_', true)
	equal(be__val_(val_, source_ctx, 'test_source'), true)
	equal(be__val_('val_', source_ctx, 'test_source'), true)
})
test.run()
