import { globalThis__prop__ensure } from '../globalThis__prop__ensure/index.js'
/** @typedef {import('./index.d.ts').Be} */
/** @typedef {import('./index.d.ts').be_} */
/** @typedef {import('./index.d.ts').be_config_T} */
/** @typedef {import('./index.d.ts').Ctx} */
/** @typedef {import('./index.d.ts').MapCtx} */
/** @typedef {import('./index.d.ts').be__val__new_T} */
/** @typedef {import('./index.d.ts').is_source__T} */
/**
 * Auto-memoization function for the Ctx.
 * Memoized on globalThis to allow packages being loaded multiple times, which can happen during bundling.
 *
 * Returns a function to ensure that a member id_OR_val_ is defined on a ctx object,
 * otherwise it caches & uses the return value of val__new.
 * @param {string|symbol}id
 * @param {be__val__new_T}val__new
 * @param {be_config_T}[config]
 * @returns {Be}
 * @private
 */
export function globalThis__be_(id, val__new, config) {
	return globalThis__prop__ensure(id, ()=>
		be_(val__new, { id, ...(config||{}) }))
}
/**
 * Auto-memoization function for the Ctx.
 *
 * Returns a function to ensure that a member id is defined on a Ctx,
 * otherwise it caches & uses the return value of val__new.
 * @param {be__val__new_T}val__new
 * @param {be_config_T}[config]
 * @returns {Be}
 * @private
 */
export function be_(val__new, config) {
	let be = argv__ctx=>{
		let flat__argv__ctx = Array.isArray(argv__ctx) && argv__ctx.flat(Infinity)
		let be__ctx =
      flat__argv__ctx
	      ? flat__argv__ctx.find(ctx=>ctx.has(be))
	      : argv__ctx.has(be) && argv__ctx
		if (!be__ctx) {
			be__ctx =
				flat__argv__ctx
					? flat__argv__ctx.find(ctx=>!be.is_source_ || be.is_source_(ctx, argv__ctx))
					: (!be.is_source_ || be.is_source_(argv__ctx, argv__ctx)) && argv__ctx
			// circular dependency state
			// if val__new calls this be before returning, Symbol('cir') will be the value of this be
			// 'cir' is used instead of 'circular' to reduce the payload by a few bytes
			be__ctx.set(be, Symbol('cir'))
			be__ctx.set(be, val__new(argv__ctx, be))
			if (be.id) be__ctx.set(be.id, be__ctx.get(be))
		}
		return be__ctx.get(be)
	}
	be.id = config?.id
	be.is_source_ = config?.is_source_
	be.is_be = true
	return be
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
	is_source_ = be_OR_id.is_source_
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
 * @param {Ctx}ctx
 * @param {Be|string|symbol}be_OR_id
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
	return Boolean(be__ctx_(be_or_id, argv__ctx))
}
/**
 * @param {Be|string}be_or_id
 * @param {Ctx}argv__ctx
 * @returns {MapCtx}
 * @private
 */
export function be__ctx_(be_or_id, argv__ctx) {
	if (Array.isArray(argv__ctx)) {
		for (let ctx of argv__ctx) {
			let be__ctx = be__ctx_(be_or_id, ctx)
			if (be__ctx) return be__ctx
		}
	} else {
		if (argv__ctx.has(be_or_id)) return argv__ctx
	}
}
export { be__ctx_ as be__has__ctx_ }
/**
 * @param {Be|string}be_or_id
 * @param {Ctx}argv__ctx
 * @returns {unknown}
 * @private
 */
export function be__val_(be_or_id, argv__ctx) {
	let be__ctx = be__ctx_(be_or_id, argv__ctx)
	if (be__ctx) return be__ctx.get(be_or_id)
}
/**
 * @param {Ctx}argv__ctx
 * @param {is_source__T}is_source_
 * @returns {unknown}
 * @private
 */
export function source__map_ctx_(argv__ctx, is_source_) {
	if (Array.isArray(argv__ctx)) {
		for (let ctx of argv__ctx) {
			let source__map_ctx = source__map_ctx_(ctx, is_source_)
			if (source__map_ctx) return source__map_ctx
		}
	} else if (!is_source_ || is_source_(/** @type {MapCtx} */argv__ctx, argv__ctx)) {
		return argv__ctx
	}
}
