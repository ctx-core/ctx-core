import { globalThis__prop__ensure } from '../globalThis__prop__ensure/index.js'
let proto_ = Object.getPrototypeOf
let string_proto = proto_('')
let pending_sym = Symbol.for('pending')
let be_M_is_source_ = globalThis.be_M_is_source_ ||= new WeakMap()
/** @typedef {import('./index.d.ts').Be}Be */
/** @typedef {import('./index.d.ts').Ctx}Ctx */
/** @typedef {import('./index.d.ts').MapCtx}MapCtx */
/** @typedef {import('./index.d.ts').be__params_T}be__params_T */
/** @typedef {import('./index.d.ts').be__val__T}be__val__T */
/** @typedef {import('./index.d.ts').is_source__T}is_source__T */
/**
 * Auto-memoization function for the Ctx.
 * Memoized on globalThis to allow packages being loaded multiple times, which can happen during bundling.
 *
 * Returns a function to ensure that a member id_OR_val_ is defined on a ctx object,
 * otherwise it creates the value using the val__OR_be__params factory function.
 * @param {string|be__val__T}id_OR_val_
 * @param {be__val__T|be__params_T}[val__OR_be__params]
 * @param {be__params_T}[be__params]
 * @returns {Be}
 * @private
 */
export function globalThis__be_(
	id_OR_val_,
	val__OR_be__params,
	be__params
) {
	return globalThis__prop__ensure(
		Symbol.for(id_OR_val_),
		()=>be_(
			id_OR_val_,
			val__OR_be__params,
			be__params))
}
/**
 * Auto-memoization function for the Ctx.
 *
 * Returns a function to ensure that a member id is defined on a Ctx,
 * otherwise it creates the value using the val_ factory function.
 * @param {string|be__val__T}id_OR_val__new
 * @param {be__val__T|be__params_T}[val__new_OR_be__params]
 * @param {be__params_T}[be__params]
 * @returns {Be}
 * @private
 */
export function be_(
	id_OR_val__new,
	val__new_OR_be__params,
	be__params = {}
) {
	/** @type {string} */
	let id
	/** @type {be__val__T} */
	let val__new
	/** @type {is_source__T} */
	let is_source_
	/** @type {expired__T} */
	let expired_
	if (proto_(id_OR_val__new) === string_proto) {
		id = id_OR_val__new
		val__new = val__new_OR_be__params || (()=>null)
	} else {
		val__new = id_OR_val__new
		be__params = val__new_OR_be__params
	}
	if (be__params) {
		is_source_ = be__params.is_source_
		expired_ = be__params.expired_
	}
	let be = (argv__ctx, params = {})=>{
		if (!argv__ctx) {
			throw new Error(`be must have a Ctx passed as an argument`)
		}
		let saved__val = be__val_(be, argv__ctx)
		if (
			be__has_(be, argv__ctx)
			&& !params.force
			&& (!expired_ || !expired_(argv__ctx))
		) {
			return saved__val
		}
		let ctx = source__map_ctx_(argv__ctx, is_source_)
		if (!ctx) {
			throw new Error(
				`be: ${
					String(id)
				}: is_source_ must be true for at least one Ctx`)
		}
		let pending = ctx.get(pending_sym)
		if (!pending) {
			pending = new Map
			ctx.set(pending_sym, pending)
		}
		if (pending.get(be)) {
			throw new Error(
				`be_: ${
					String(id)
				}: circular:\n${pending.values().map(pending_value=>
					typeof pending_value === 'function'
						? 'Function'
						: pending_value).join('\n')}`)
		}
		pending.set(be, id || be)
		let val = val__new(argv__ctx, be, params)
		ctx.set(be, val)
		if (id) {
			ctx.set(id, val)
		}
		pending.delete(be)
		return val
	}
	be_M_is_source_.set(be, is_source_)
	be.id = id
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
	if (!is_source_) is_source_ = ()=>true
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
	const is_source_ =
		be__is_source__(be_OR_id)
		|| (()=>true)
	if (Array.isArray(ctx)) {
		for (let _ctx of ctx) {
			if (is_source_(_ctx, ctx)) {
				ctx__delete(_ctx, be_OR_id)
			}
		}
	} else {
		/** @type {MapCtx} */
		let map_ctx = /** @type {any} */ctx
		if (is_source_(map_ctx, ctx)) {
			let { id } = be_OR_id
			if (id) {
				map_ctx.delete(id)
			}
			map_ctx.delete(be_OR_id)
		}
	}
}
/**
 * @param {Be|string}be_or_id
 * @param {Ctx}argv__ctx
 * @returns {boolean}
 * @private
 */
export function be__has_(be_or_id, argv__ctx) {
	return !!be__has__ctx_(be_or_id, argv__ctx)
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
