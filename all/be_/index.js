/// <reference types="./index.d.ts" />
let _undefined
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
	let be = ctx=>{
		let be_map = ctx.s[be.ns]
		/* @if DEBUG **
			// ~ 30 B
			if (!be_map) throw Error('ctx_no_ns: \'' + be.ns + '\'')
		/* @endif */
		if (be_map.has(be.id)) return be_map.get(be.id)
		// circular dependency state
		// if val__new calls this be before returning, 'cir' will be the value of this be
		// 'cir' is used instead of 'circular' to reduce the payload by a few bytes
		be_map.set(be.id, 'cir')
		be_map.set(be.id, val__new(ctx, be))
		return be_map.get(be.id)
	}
	be.id = config?.id ?? be
	be.ns = config?.ns ?? ''
	be.is_be = true
	return be
}
/**
 * Auto-memoization function for the Ctx.
 * Memoized on globalThis to allow packages being loaded multiple times, which can happen during bundling.
 *
 * Returns a function to ensure that a member id_OR_val_ is defined on a ctx object,
 * otherwise it caches & uses the return value of val__new.
 * @param {string|symbol}id
 * @param {be__val__new_T}val__new
 * @param {be_config_T}config
 * @returns {Be}
 * @private
 */
export { be_ as globalThis__be_ }
/**
 * @param {Ctx}ctx
 * @param {Be|string|symbol}be_OR_id
 * @param {unknown}val
 * @param {string}[ns]
 * @returns {unknown}
 * @private
 */
export function ctx__set(
	ctx,
	be_OR_id,
	val,
	ns = be_OR_id.ns ?? ''
) {
	ctx.s[ns].set(be_OR_id.id ?? be_OR_id, val)
}
/**
 * @param {Ctx}ctx
 * @param {Be|string|symbol}be_OR_id
 * @param {string}[ns]
 */
export function ctx__delete(
	ctx,
	be_OR_id,
	ns = be_OR_id.ns ?? ''
) {
	if (ns != null) {
		ctx.s[ns].delete(be_OR_id.id ?? be_OR_id)
	} else {
		for (let _source in ctx.s) {
			ctx.s[_source].delete(be_OR_id.id ?? be_OR_id)
		}
	}
}
/**
 * @param {[Be|string, Ctx]|[Be|string, Ctx, string]}arg_a
 * @returns {boolean}
 * @private
 */
export function be__has_(...arg_a) {
	return Boolean(be_map__find(...arg_a))
}
/**
 * @param {Be}be_or_id
 * @param {Ctx}ctx
 * @param {string}[ns]
 * @returns {Ctx}
 * @private
 */
export function be_map__find(be_or_id, ctx, ns = be_or_id.ns ?? '') {
	return ctx.s[ns].has(be_or_id.id ?? be_or_id) ? ctx.s[ns] : _undefined
}
/**
 * @param {Be|string}be_or_id
 * @param {Ctx}ctx
 * @param {string}[ns]
 * @returns {unknown}
 * @private
 */
export function be__val_(be_or_id, ctx, ns) {
	return be_map__find(be_or_id, ctx, ns)?.get?.(be_or_id.id ?? be_or_id)
}
