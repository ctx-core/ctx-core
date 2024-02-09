/// <reference types="../be_/index.d.ts" />
/**
 * @returns {ctx_T}
 * @private
 */
export function ctx__new() {
	return { is_ctx: true, s: { '': new Map } }
}
export { ctx__new as ctx_ }
/**
 * @param {string|ctx_T}[ns_a]
 * @returns {ctx_T}
 * @private
 */
export function ns_ctx__new(...ns_a) {
	let ctx = { is_ctx: true, s: {} }
	for (let ns of ns_a) {
		for (let _ns in ns.s) {
			ctx.s[_ns] ??= ns.s[_ns]
		}
		if (!ns.s) ctx.s[ns] ??= new Map
	}
	return ctx
}
export { ns_ctx__new as ns_ctx_ }
/**
 * @param {unknown}val
 * @returns {boolean}
 * @private
 */
export function is_ctx_(val) {
	return !!val?.is_ctx
}
