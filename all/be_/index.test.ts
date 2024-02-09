import { preprocess } from '@ctx-core/preprocess'
import { build } from 'esbuild'
import { readFile, unlink } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { test } from 'uvu'
import { equal, is, throws } from 'uvu/assert'
import {
	type Be,
	be_,
	be__has_,
	be__val_,
	be_map__find,
	type BeMapO,
	type ctx_T,
	ctx__clear,
	ctx__delete,
	ctx__set,
	type ctx_s_T,
	type wide_ctx_s_T,
	type wide_ctx_T,
	globalThis__be_, id_be_, ns_be_, ns_id_be_,
	ondelete_be_
} from '../be_/index.js'
import { ctx__new, ns_ctx__new } from '../ctx/index.js'
import { tempfile_path_ } from '../tempfile_path/index.js'
import type { Equal, Expect } from '../test/index.js'
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
	equal(ctx.s[''].get('root_')![0], 1)
	equal(child_(ctx), 3)
	equal(ctx.s[''].get('child_')![0], 3)
	equal(child1_(ctx), 4)
	equal(ctx.s[''].get('child1_')![0], 4)
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
test('be_|ns_ctx__new', ()=>{
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
	const child_ = be_(
		ctx=>root_(ctx) + 1,
		{ id: 'child_' })
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
	const be__ctx_a:wide_ctx_T<'ctx1'>[] = []
	const root_ = be_<number, 'ctx1'>(
		ctx=>{
			be__ctx_a.push(ctx)
			return 1
		}, {
			id: 'root_',
			ns: 'ctx1',
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
	type test_ctx0_s = Expect<Equal<typeof ctx0.s, ctx_s_T<''>>>
	// @ts-expect-error TS2345
	type test_ctx0_s_fail = Expect<Equal<typeof ctx0.s, ctx_s_T<'fail'>>>
	type test_ctx0 = Expect<Equal<typeof ctx0, ctx_T<''>>>
	// @ts-expect-error TS2345
	type test_ctx0_fail = Expect<Equal<typeof ctx0, ctx_T<'fail'>>>
	const ctx1 = ns_ctx__new('ctx1')
	type test_ctx1_s = Expect<Equal<typeof ctx1.s, ctx_s_T<'ctx1'>>>
	// @ts-expect-error TS2345
	type test_ctx1_fail = Expect<Equal<typeof ctx1, ctx_T<'fail'>>>
	// @ts-expect-error TS2345
	type test_ctx1_s_fail = Expect<Equal<typeof ctx1, ctx_s_T<''|'fail'>>>
	type test_ctx1_w_empty_string = Expect<Equal<typeof ctx1, ctx_T<'ctx1'>>>
	type test_ctx1 = Expect<Equal<typeof ctx1, ctx_T<'ctx1'>>>
	const ctx = ns_ctx__new(ctx0, ctx1)
	type test_ctx_s_wide_T = Expect<Equal<
		typeof ctx.s, typeof ctx extends wide_ctx_s_T<''|'ctx1'>
		? typeof ctx.s
		: never>>
	type test_ctx_s_BeMapO = Expect<Equal<
		typeof ctx.s, typeof ctx.s extends BeMapO<''|'ctx1'>
		? typeof ctx.s
		: never>>
	type test_ctx_s = Expect<Equal<typeof ctx.s, ctx_s_T<''|'ctx1'>>>
	type test_ctx_extends = Expect<Equal<
		typeof ctx, typeof ctx extends wide_ctx_T<''|'ctx1'>
		? typeof ctx
		: never>>
	type test_ctx_Ctx = Expect<Equal<typeof ctx, ctx_T<''|'ctx1'>>>
	const root_ = be_<number, 'ctx1'>(
		ctx=>{
			type test_be_ctx_argument = Expect<Equal<typeof ctx, wide_ctx_T<'ctx1'>>>
			return 1
		}, {
			ns: 'ctx1',
			id: 'root_'
		})
	/* eslint-enable @typescript-eslint/no-unused-vars */
})
test('be_|ctx_T generic type', ()=>{
	const valid_ctx = ns_ctx__new('test_ns')
	const val_ = be_<boolean, 'test_ns'>(()=>
		true,
	{ id: 'val_', ns: 'test_ns' })
	val_(valid_ctx)
	// @ts-expect-error TS2322
	throws(()=>val_(ctx__new()))
})
test('be_|ctx_T|ns', ()=>{
	const ctx0 = ctx__new()
	const ctx1 = ctx__new()
	const ctx = ns_ctx__new(ctx0, ctx1)
	const nested__ctx_ = be_<[ctx_T]>(ctx=>
		[ctx],
	{ id: 'nested__ctx_' })
	equal(nested__ctx_(ctx), [ctx])
})
test('be_|circular dependency|DEBUG=1', async ()=>{
	const dir = dirname(new URL(import.meta.url).pathname)
	const source = await readFile(
		resolve(join(dir, '../be_/index.js'))
	).then(buf=>'' + buf)
	const preprocessed_source = preprocess(
		source,
		{ DEBUG: '1' },
		{ type: 'js' })
	const tempfile = await tempfile_path_(tmpdir(), 'js')
	try {
		await build({
			stdin: {
				contents: preprocessed_source,
				loader: 'js',
				resolveDir: dir,
			},
			outfile: tempfile,
		})
		const { be_: _be_ }:{ be_:typeof be_ } = await import(tempfile)
		const be0:Be<symbol> = _be_(ctx=>
			be1(ctx))
		const be1:Be<symbol> = _be_(ctx=>
			be0(ctx))
		const ctx = ctx__new()
		equal(be0(ctx), 'cir')
		equal(be1(ctx), 'cir')
	} finally {
		await unlink(tempfile)
	}
})
test('ns_be_', ()=>{
	const valid_ctx = ns_ctx__new('test_ns')
	const val_ = ns_be_('test_ns', ()=>true)
	equal(val_(valid_ctx), true)
	// @ts-expect-error TS2322
	throws(()=>val_(ctx__new()))
})
test('id_be_', ()=>{
	const valid_ctx = ctx__new()
	const val_ = id_be_('test_id', ()=>true)
	equal(val_(valid_ctx), true)
	equal(val_.id, 'test_id')
	// @ts-expect-error TS2322
	throws(()=>val_(ns_ctx__new('test_ns')))
})
test('ns_id_be_', ()=>{
	const valid_ctx = ns_ctx__new('test_ns')
	const val_ = ns_id_be_('test_ns', 'test_id', ()=>true)
	equal(val_(valid_ctx), true)
	equal(val_.id, 'test_id')
	// @ts-expect-error TS2322
	throws(()=>val_(ctx__new()))
})
test('ctx__set', ()=>{
	const ctx0 = ns_ctx__new('ctx0')
	const ctx1 = ctx__new()
	const ns_ctx = ns_ctx__new(ctx1, ctx0)
	ctx__set(ns_ctx, 'key', 2, 'ctx0')
	// @ts-expect-error TS7053
	equal(ctx0.s[''], undefined)
	equal(ctx0.s['ctx0'].get('key')![0], 2)
	equal(ctx1.s[''].has('key'), false)
	ctx__set(ns_ctx, 'key', 1)
	// @ts-expect-error TS7053
	equal(ctx0.s[''], undefined)
	equal(ctx0.s['ctx0'].get('key')![0], 2)
	equal(ctx1.s[''].get('key')![0], 1)
})
test('ctx__delete|id', ()=>{
	const ctx0 = ctx__new()
	const key_ = be_(()=>
		true,
	{ id: 'key' })
	ctx__delete(ctx0, key_)
	equal(ctx0.s[''].has('key'), false)
	key_(ctx0)
	equal(ctx0.s[''].get('key')![0], true)
	ctx__delete(ctx0, key_)
	equal(ctx0.s[''].has('key'), false)
	const ctx1 = ctx__new()
	const ns_ctx = ns_ctx__new(ctx0, ctx1, 'test_ns')
	key_(ctx0)
	key_(ctx1)
	equal(ctx0.s[''].get('key')![0], true)
	equal(ctx1.s[''].get('key')![0], true)
	ctx__delete(ns_ctx, key_)
	equal(ctx0.s[''].has('key'), false)
	equal(ctx1.s[''].has('key'), true)
	const ns_key_ = be_(()=>
		true,
	{ id: 'key', ns: 'test_ns' })
	ns_key_(ns_ctx)
	equal(ns_ctx.s['test_ns'].get('key')![0], true)
	ctx__delete(ns_ctx, 'key')
	equal(ns_ctx.s['test_ns'].get('key')![0], true)
	ctx__delete(ns_ctx, 'key', 'test_ns')
	equal(ns_ctx.s['test_ns'].has('key'), false)
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
	const ns__num_ =
		ns_be_('ctx1', ()=>1)
	ns__num_(ns_ctx)
	// @ts-expect-error TS2345
	equal(ctx0.s[''].has(ns__num_.id), false)
	// @ts-expect-error TS7053
	equal(ctx1.s[''], undefined)
	equal(ctx1.s['ctx1'].has(ns__num_.id), true)
	ctx__delete(ns_ctx, ns__num_)
	// @ts-expect-error TS2345
	equal(ctx0.s[''].has(ns__num_.id), false)
	// @ts-expect-error TS7053
	equal(ctx1.s[''], undefined)
	equal(ctx1.s['ctx1'].has(ns__num_.id), false)
	ns__num_(ns_ctx)
	// @ts-expect-error TS2345
	equal(ctx0.s[''].has(ns__num_.id), false)
	// @ts-expect-error TS7053
	equal(ctx1.s[''], undefined)
	equal(ctx1.s['ctx1'].has(ns__num_.id), true)
	ctx__delete(ns_ctx, ns__num_)
	// @ts-expect-error TS2345
	equal(ctx0.s[''].has(ns__num_.id), false)
	// @ts-expect-error TS7053
	equal(ctx1.s[''], undefined)
	equal(ctx1.s['ctx1'].has(ns__num_.id), false)
	ns__num_(ns_ctx)
	// @ts-expect-error TS2345
	equal(ctx0.s[''].has(ns__num_.id), false)
	// @ts-expect-error TS7053
	equal(ctx1.s[''], undefined)
	equal(ctx1.s['ctx1'].has(ns__num_.id), true)
	ctx__delete(ns_ctx, ns__num_, '')
	// @ts-expect-error TS2345
	equal(ctx0.s[''].has(ns__num_.id), false)
	// @ts-expect-error TS7053
	equal(ctx1.s[''], undefined)
	equal(ctx1.s['ctx1'].has(ns__num_.id), true)
})
test('be__has_', ()=>{
	const ctx0 = ctx__new()
	const key_ = be_(()=>
		true,
	{ id: 'key' })
	ctx__delete(ctx0, 'key')
	equal(be__has_('key', ctx0), false)
	key_(ctx0)
	equal(be__has_('key', ctx0), true)
	ctx__delete(ctx0, 'key')
	equal(be__has_('key', ctx0), false)
	const ctx1 = ctx__new()
	const ns_ctx = ns_ctx__new(ctx0, ctx1, 'test_ns')
	key_(ctx1)
	equal(be__has_('key', ns_ctx), false)
	equal(be__has_('key', ns_ctx, 'test_ns'), false)
	key_(ctx0)
	equal(be__has_('key', ns_ctx), true)
	equal(be__has_('key', ns_ctx, 'test_ns'), false)
	const ns_key_ = be_(()=>
		true,
	{ id: 'key', ns: 'test_ns' })
	ns_key_(ns_ctx)
	equal(be__has_('key', ns_ctx, 'test_ns'), true)
})
test('be_map__find', ()=>{
	const ctx0 = ctx__new()
	const be_map0 = ctx0.s['']
	const key_ = be_(()=>
		true,
	{ id: 'key' })
	ctx__delete(ctx0, 'key')
	equal(be_map__find('key', ctx0), undefined)
	key_(ctx0)
	equal(be_map__find('key', ctx0), be_map0)
	ctx__delete(ctx0, 'key')
	equal(be_map__find('key', ctx0), undefined)
	const ctx1 = ctx__new()
	const be_map1 = ctx1.s['']
	const ns_ctx = ns_ctx__new(ctx0, ctx1, 'test_ns')
	is.not(ns_ctx.s.test_ns, be_map0)
	is.not(ns_ctx.s.test_ns, be_map1)
	key_(ctx1)
	equal(be_map__find('key', ns_ctx), undefined)
	equal(be_map__find('key', ns_ctx, 'test_ns'), undefined)
	key_(ctx0)
	equal(be_map__find('key', ns_ctx), be_map0)
	equal(be_map__find('key', ns_ctx, 'test_ns'), undefined)
	const ns_key_ = be_(()=>
		true,
	{ id: 'key', ns: 'test_ns' })
	ns_key_(ns_ctx)
	equal(be_map__find('key', ns_ctx, 'test_ns'), ns_ctx.s.test_ns)
})
test('be__val_', ()=>{
	const ctx0 = ctx__new()
	const ctx1 = ctx__new()
	const ns_ctx = ns_ctx__new(ctx0, ctx1, 'test_ns')
	const val_ = be_(()=>
		true,
	{ id: 'val_' })
	equal(val_(ns_ctx), true)
	equal(ns_ctx.s[''].get(val_.id)![0], true)
	equal(be__val_(val_, ns_ctx), true)
	equal(be__val_('val_', ns_ctx), true)
	ctx__set(ns_ctx, val_, false)
	equal(val_(ns_ctx), false)
	equal(be__val_(val_, ns_ctx), false)
	equal(be__val_('val_', ns_ctx), false)
	equal(be__val_(val_, ns_ctx, 'test_ns'), undefined)
	equal(be__val_('val_', ns_ctx, 'test_ns'), undefined)
	const ns_val_ = be_(()=>
		true,
	{ id: 'val_', ns: 'test_ns' })
	ns_val_(ns_ctx)
	equal(be__val_(val_, ns_ctx, 'test_ns'), true)
	equal(be__val_('val_', ns_ctx, 'test_ns'), true)
})
test('ondelete_be_', ()=>{
	const ondelete0_arg_aa:[val:number, ctx:ctx_T, be:Be<number, ''|'test_ns'>][] = []
	const ondelete1_arg_aa:[val:number, ctx:ctx_T, be:Be<number, ''|'test_ns'>][] = []
	const _ondelete0 = (...arg_a:[val:number, ctx:ctx_T, be:Be<number, ''|'test_ns'>])=>
		ondelete0_arg_aa.push(arg_a)
	const _ondelete1 = (...arg_a:[val:number, ctx:ctx_T, be:Be<number, ''|'test_ns'>])=>
		ondelete1_arg_aa.push(arg_a)
	const be =
		ondelete_be_<number>((ctx, { ondelete })=>{
			ondelete(_ondelete0)
			ondelete(_ondelete1)
			return 1
		})
	const ctx = ctx__new()
	equal(be(ctx), 1)
	equal(ondelete0_arg_aa, [])
	equal(ondelete1_arg_aa, [])
	ctx__delete(ctx, be)
	equal(ondelete0_arg_aa, [[1, ctx, be]])
	equal(ondelete1_arg_aa, [[1, ctx, be]])
	equal(be(ctx), 1)
	equal(ondelete0_arg_aa, [[1, ctx, be]])
	equal(ondelete1_arg_aa, [[1, ctx, be]])
	ctx__delete(ctx, be)
	equal(ondelete0_arg_aa, [[1, ctx, be], [1, ctx, be]])
	equal(ondelete1_arg_aa, [[1, ctx, be], [1, ctx, be]])
})
test('ctx__clear', ()=>{
	const ondelete0_arg_aa:[val:number, ctx:ctx_T, be:Be<number, ''|'test_ns'>][] = []
	const ondelete1_arg_aa:[val:number, ctx:ctx_T, be:Be<number, ''|'test_ns'>][] = []
	const _ondelete0 = (...arg_a:[val:number, ctx:ctx_T, be:Be<number, ''|'test_ns'>])=>
		ondelete0_arg_aa.push(arg_a)
	const _ondelete1 = (...arg_a:[val:number, ctx:ctx_T, be:Be<number, ''|'test_ns'>])=>
		ondelete1_arg_aa.push(arg_a)
	const be0 =
		ondelete_be_<number>((ctx, { ondelete })=>{
			ondelete(_ondelete0)
			ondelete(_ondelete1)
			return 1
		})
	const be1 =
		ondelete_be_<number, 'test_ns'>((ctx, { ondelete })=>{
			ondelete(_ondelete0)
			ondelete(_ondelete1)
			return 1
		}, { ns: 'test_ns' })
	const ctx = ns_ctx__new('', 'test_ns')
	equal(be0(ctx), 1)
	equal(be1(ctx), 1)
	equal(ondelete0_arg_aa, [])
	equal(ondelete1_arg_aa, [])
	ctx__clear(ctx)
	equal(ondelete0_arg_aa, [[1, ctx, be0], [1, ctx, be1]])
	equal(ondelete1_arg_aa, [[1, ctx, be0], [1, ctx, be1]])
})
test.run()
