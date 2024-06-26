/// <reference types="./index.d.ts" />
let _undefined
/**
 * Auto-memoization function for the ctx_T.
 *
 * Returns a function to ensure that a member id is defined on a ctx_T,
 * otherwise it caches & uses the return value of val__new.
 * @param {be__val__new_T}val__new
 * @param {be_config_T}[config]
 * @returns {Be}
 * @private
 */
export function be_(val__new, config) {
	let be = ctx=>{
		let be_map = ctx.s[be.ns]
		// @formatter:off
		/* @if DEBUG **
		// ~ 30 B
		if (!be_map) throw Error('ctx_no_ns: \'' + be.ns + '\'')
		/* @endif */
		// config is not used anymore so reusing to reduce bundle size
		// @formatter:on
		config = be_map.get(be.id)
		if (config) return config[0]
		// @formatter:off
		/* @if DEBUG **
		// 5-11 B
		// circular dependency state
		// if val__new calls this be before returning, 'cir' will be the value of this be
		// 'cir' is used instead of 'circular' to reduce the payload by a few bytes
		config = ['cir', ctx, be]
		be_map.set(be.id, config)
		config[0] = val__new(ctx, be)
		/* @endif */
		// @formatter:on
		/* @if !DEBUG */
		config = [val__new(ctx, be), ctx, be]
		be_map.set(be.id, config)
		/* @endif */
		return config[0]
	}
	be.id = config?.id ?? be
	be.ns = config?.ns ?? ''
	be.is_be = true
	return be
}
/**
 * @param {string}ns
 * @param {be__val__new_T}val__new
 * @returns {Be}
 * @private
 */
export function ns_be_(ns, val__new) {
	return be_(val__new, { ns })
}
/**
 * @param {string}id
 * @param {be__val__new_T}val__new
 * @returns {Be}
 * @private
 */
export function id_be_(id, val__new) {
	return be_(val__new, { id })
}
/**
 * @param {string}ns
 * @param {string}id
 * @param {be__val__new_T}val__new
 * @returns {Be}
 * @private
 */
export function ns_id_be_(ns, id, val__new) {
	return be_(val__new, { ns, id })
}
/**
 * Auto-memoization function for the ctx_T.
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
 * @param {ctx_T}ctx
 * @param {Be|string|symbol}be_OR_id
 * @param {string}[ns]
 * @returns {unknown}
 * @private
 */
export function ctx__get(
	ctx,
	be_OR_id,
	ns = be_OR_id.ns ?? ''
) {
	return ctx.s[ns].get(be_OR_id.id ?? be_OR_id)?.[0]
}
/**
 * @param {ctx_T}ctx
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
	let state =
		ctx.s[ns].get(be_OR_id.id ?? be_OR_id)
		?? [val, be_OR_id.id ?? be_OR_id, ctx]
	// ondelete
	if (state[1] !== (be_OR_id.id ?? be_OR_id)) state[1].d?.(...state)
	state[0] = val
	ctx.s[ns].set(state[1], state)
}
/**
 * @param {ctx_T}ctx
 * @param {Be|string|symbol}be_OR_id
 * @param {string}[ns]
 */
export function ctx__delete(
	ctx,
	be_OR_id,
	ns = be_OR_id.ns ?? ''
) {
	let state = ctx.s[ns].get(be_OR_id.id ?? be_OR_id)
	if (state) {
		state[2].d?.(...state)
		ctx.s[ns].delete(state[2].id)
	}
}
/**
 * Clear all BeMap values by running ctx__delete on all stored Be functions.
 * This behavior can be used in conjunction with ondelete_be_ to run the ondelete callbacks
 * on all of the ondelete_be functions.
 * @param {ctx_T}ctx
 */
export function ctx__clear(ctx) {
	for (let ns in ctx.s) {
		for (let id of ctx.s[ns].keys()) {
			ctx__delete(ctx, id)
		}
	}
}
/**
 * @param {[Be|string, ctx_T]|[Be|string, ctx_T, string]}arg_a
 * @returns {boolean}
 * @private
 */
export function be__has_(...arg_a) {
	return Boolean(be_map__find(...arg_a))
}
/**
 * @param {Be}be_OR_id
 * @param {ctx_T}ctx
 * @param {string}[ns]
 * @returns {ctx_T}
 * @private
 */
export function be_map__find(be_OR_id, ctx, ns = be_OR_id.ns ?? '') {
	return ctx.s[ns].has(be_OR_id.id ?? be_OR_id) ? ctx.s[ns] : _undefined
}
/**
 * @param {Be|string}be_OR_id
 * @param {ctx_T}ctx
 * @param {string}[ns]
 * @returns {unknown}
 * @private
 */
export function be__val_(be_OR_id, ctx, ns) {
	return be_map__find(be_OR_id, ctx, ns)?.get?.(be_OR_id.id ?? be_OR_id)?.[0]
}
/**
 * @param {be__val__new_T}val__new
 * @param {be_config_T}config
 * @returns {Be}
 * @private
 */
export function ondelete_be_(val__new, config) {
	let be = be_(val__new, config)
	let ondelete_cb_a = []
	be.ondelete = cb=>{
		ondelete_cb_a.push(cb)
		return be
	}
	be.d = (...state)=>{
		for (let ondelete_cb of ondelete_cb_a) {
			ondelete_cb(...state)
		}
		ondelete_cb_a = []
	}
	return be
}
/**
 * @param {string}ns
 * @param {be__val__new_T}val__new
 * @returns {Be}
 * @private
 */
export function ns_ondelete_be_(ns, val__new) {
	return ondelete_be_(val__new, { ns })
}
/**
 * @param {string}id
 * @param {be__val__new_T}val__new
 * @returns {Be}
 * @private
 */
export function id_ondelete_be_(id, val__new) {
	return ondelete_be_(val__new, { id })
}
/**
 * @param {string}ns
 * @param {string}id
 * @param {be__val__new_T}val__new
 * @returns {Be}
 * @private
 */
export function ns_id_ondelete_be_(ns, id, val__new) {
	return ondelete_be_(val__new, { ns, id })
}
