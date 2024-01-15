import { wrap_a_ } from '../wrap_a/index.js'
import { wrap_concat } from '../wrap_concat/index.js'
/**
 * Returns `!==` operator to all values in `a_unwrap`.
 * @param {unknown}a_unwrap
 * @returns {boolean}
 */
export function neql(a_unwrap) {
	const value_a = wrap_a_(a_unwrap)
	let current_value = value_a[0]
	for (let i = 1; i < value_a.length; i++) {
		const value = value_a[i]
		if (current_value === value) return false
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
