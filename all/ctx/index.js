/**
 * @returns {import('../be_/index.js').MapCtx}
 * @private
 */
export function ctx__new() {
	return new Map([[Symbol.for('ctx'), true]])
}
export { ctx__new as ctx_ }
/**
 * @param {unknown}val
 * @returns {boolean}
 * @private
 */
export function is_ctx_(val) {
	if (!Array.isArray(val)) return !!(val instanceof Map && val.get(Symbol.for('ctx')))
	if (!val.length) return false
	let flat__val = val.flat(Infinity)
	for (let i = 0; i < flat__val.length; i++) {
		if (!is_ctx_(flat__val[i])) return false
	}
	return true
}
