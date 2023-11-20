/**
 * @returns {import('../be_/index.js').MapCtx}
 * @private
 */
export function ctx__new() {
	let ctx = new Map
	ctx.is_ctx = true
	return ctx
}
export { ctx__new as ctx_ }
/**
 * @param {unknown}val
 * @returns {boolean}
 * @private
 */
export function is_ctx_(val) {
	if (!Array.isArray(val)) return val instanceof Map && !!val.is_ctx
	let flat__map_ctx_a = val.flat(Infinity)
	if (!flat__map_ctx_a[0]) return false
	return flat__map_ctx_a.every(map_ctx=>map_ctx.is_ctx)
}
