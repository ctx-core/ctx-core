import { globalThis__prop__ensure } from '../globalThis__prop__ensure/index.js'
export * from './debug.js'
let be_M_is_source_ = globalThis.be_M_is_source_ ||= new WeakMap()
/** @typedef {import('./index.d.ts').Be} */
/** @typedef {import('./index.d.ts').be_} */
/** @typedef {import('./index.d.ts').Ctx} */
/** @typedef {import('./index.d.ts').MapCtx} */
/** @typedef {import('./index.d.ts').be__val__new_T} */
/** @typedef {import('./index.d.ts').is_source__T} */
/**
 * Auto-memoization function for the Ctx.
 * Memoized on globalThis to allow packages being loaded multiple times, which can happen during bundling.
 *
 * Returns a function to ensure that a member id_OR_val_ is defined on a ctx object,
 * otherwise it creates the value using the val__OR_be__params factory function.
 * @param {be__val__new_T}val__new
 * @returns {Be}
 * @private
 */
export function globalThis__be_(val__new) {
	return globalThis__prop__ensure(Symbol.for(val__new), ()=>be_(val__new))}
/**
 * Auto-memoization function for the Ctx.
 *
 * Returns a function to ensure that a member id is defined on a Ctx,
 * otherwise it creates the value using the val_ factory function.
 * @param {be__val__new_T}val__new
 * @returns {Be}
 * @private
 */
export function be_(val__new) {
	/** @type {expired__T} */
	let expired_
	let be = (argv__ctx, params)=>{
		be_.argv__debug?.(argv__ctx)
		if (
			!params?.force
			&& be__has_(be, argv__ctx)
			&& !expired_?.(argv__ctx)
		) {
			return be__val_(be, argv__ctx)
		}
		let ctx = source__map_ctx_(argv__ctx, be_M_is_source_.get(be))
		be_.source__debug?.(ctx)
		let pending = ctx.get(Symbol.for('pending'))
		if (!pending) {
			pending = new Map
			ctx.set(Symbol.for('pending'), pending)
		}
		be_.pending__debug?.(pending)
		pending.set(be, be.id || be)
		let val = val__new ? val__new(argv__ctx, be, params) : null
		ctx.set(be, val)
		if (be.id) {
			ctx.set(be.id, val)
		}
		pending.delete(be)
		return val
	}
	be.config = params=>{
		be.id = params.id
		expired_ = params.expired_
		be_M_is_source_.set(be, params.is_source_)
		return be
	}
	return be
}
export {
	be_ as _be,
	be_ as b_,
	be_ as _b,
}
/**
 * @param {Be}be
 * @returns {is_source__T}
 * @private
 */
export function be__is_source__(be) {
	return be_M_is_source_.get(be)
}
/**
 * @param {Be}be
 * @param {Ctx}ctx
 * @param {unknown}val
 * @returns {unknown}
 * @private
 */
export function be__set(be, ctx, val) {
	ctx__set(ctx, be, val, be__is_source__(be))
}
/**
 * @param {Ctx}ctx
 * @param {Be|string|symbol}be_OR_id
 * @param {unknown}val
 * @param {is_source__T}[is_source_]
 * @returns {unknown}
 * @private
 */
export function ctx__set(
	ctx,
	be_OR_id,
	val,
	is_source_
) {
	let source__map_ctx = source__map_ctx_(ctx, is_source_)
	if (source__map_ctx) {
		source__map_ctx.set(be_OR_id, val)
		let { id } = be_OR_id
		if (id) {
			source__map_ctx.set(id, val)
		}
	}
}
/**
 * @param {Be}be
 * @param {Ctx}ctx
 * @private
 */
export function be__delete(be, ctx) {
	ctx__delete(ctx, be)
}
/**
 * @param {Ctx}ctx
 * @param {Be|string|symbol}be_OR_id
 * @param {is_source__T}[is_source_]
 */
export function ctx__delete(
	ctx,
	be_OR_id,
) {
	if (Array.isArray(ctx)) {
		for (let _ctx of ctx) {
			ctx__delete(_ctx, be_OR_id)
		}
	} else {
		/** @type {MapCtx} */
		let map_ctx = /** @type {any} */ctx
		let { id } = be_OR_id
		if (id) {
			map_ctx.delete(id)
		}
		map_ctx.delete(be_OR_id)
	}
}
/**
 * @param {Be|string}be_or_id
 * @param {Ctx}argv__ctx
 * @returns {boolean}
 * @private
 */
export function be__has_(be_or_id, argv__ctx) {
	return Boolean(be__has__ctx_(be_or_id, argv__ctx))
}
/**
 * @param {Be|string}be_or_id
 * @param {Ctx}argv__ctx
 * @returns {MapCtx}
 * @private
 */
export function be__has__ctx_(be_or_id, argv__ctx) {
	if (Array.isArray(argv__ctx)) {
		for (let i = 0; i < argv__ctx.length; i++) {
			const be__has__ctx = be__has__ctx_(be_or_id, argv__ctx[i])
			if (be__has__ctx) return be__has__ctx
		}
		return null
	} else {
		return argv__ctx.has(be_or_id) ? argv__ctx : null
	}
}
/**
 * @param {Be|string}be_or_id
 * @param {Ctx}argv__ctx
 * @returns {unknown}
 * @private
 */
export function be__val_(be_or_id, argv__ctx) {
	if (Array.isArray(argv__ctx)) {
		for (let i = 0; i < argv__ctx.length; i++) {
			let ctx = argv__ctx[i]
			const be__has__ctx = be__has__ctx_(be_or_id, ctx)
			if (be__has__ctx) return be__has__ctx.get(be_or_id)
		}
	} else {
		return argv__ctx.get(be_or_id)
	}
}
/**
 * @param {Ctx}ctx
 * @param {is_source__T}is_source_
 * @returns {unknown}
 * @private
 */
export function source__map_ctx_(ctx, is_source_) {
	if (Array.isArray(ctx)) {
		for (let i = 0; i < ctx.length; i++) {
			let i_ctx = ctx[i]
			let source__map_ctx = source__map_ctx_(i_ctx, is_source_)
			if (source__map_ctx) return source__map_ctx
		}
	} else if (!is_source_ || is_source_(/** @type {MapCtx} */ctx, ctx)) {
		return ctx
	}
}
