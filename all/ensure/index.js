import { keys } from '../keys/index.js'
/**
 * Ensures that the keys in `rest_ctx_a` are added to val
 *   only if the key is not defined on val (== null).
 * The order of precedence is from left to right.
 * @param {unknown}val
 * @param {unknown}rest_ctx_a
 * @returns {unknown}
 * @example
 * val = {baz: 99}
 * ensure(val, {foo: 1, baz: 4}, {foo: 2, bar: 3}) // {baz:99, foo: 1, bar: 3}
 */
export function ensure(val, ...rest_ctx_a) {
	if (!val) return
	for (let i = 0; i < rest_ctx_a.length; i++) {
		const rest = rest_ctx_a[i]
		const rest_ctx_key_a = keys(rest || {})
		for (let j = 0; j < rest_ctx_key_a.length; j++) {
			const key = rest_ctx_key_a[j]
			if (val[key] == null) {
				val[key] = rest[key]
			}
		}
	}
	return val
}
