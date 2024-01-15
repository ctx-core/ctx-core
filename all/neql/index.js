import { wrap_a_ } from '../wrap_a/index.js'
import { wrap_concat } from '../wrap_concat/index.js'
/**
 * Returns `!==` operator to all values in `a_unwrap`.
 * @param {unknown}a_unwrap
 * @returns {boolean}
 */
export function neql(a_unwrap) {
	let [cmp_val, ...rest] = wrap_a_(a_unwrap)
	for (let val of rest) {
		if (cmp_val === val) return false
	}
	return true
}
/**
 * Returns function that returns `!==` operator to all values in `in_value_a`.
 * @param {unknown}in_value_a
 * @returns {(value:unknown)=>boolean}
 */
export function neql_(in_value_a) {
	return value=>neql(wrap_concat(in_value_a, value))
}
export { neql_ as _neql, }
