import { flatten } from '../flatten/index.js'
import { isArray } from '../isArray/index.js'
const ctx_sym = Symbol.for('ctx')
/**
 * @returns {import('../be_/index.js').MapCtx}
 * @private
 */
export function ctx__new() {
	return new Map([[ctx_sym, true]])
}
export { ctx__new as ctx_ }
/**
 * @param {unknown}val
 * @returns {boolean}
 * @private
 */
export function is_ctx_(val) {
	if (!isArray(val)) return !!(val instanceof Map && val.get(ctx_sym))
	if (!val.length) return false
	const flat__val = flatten(val)
	for (let i = 0; i < flat__val.length; i++) {
		if (!is_ctx_(flat__val[i])) return false
	}
	return true
}
