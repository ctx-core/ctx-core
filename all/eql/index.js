import { wrap_a_ } from '../wrap_a/index.js'
import { wrap_concat } from '../wrap_concat/index.js'
/**
 * Returns `===` operator to all values in `a_unwrap`.
 * @param {unknown}a_unwrap
 * @returns {boolean}
 */
export function eql(a_unwrap) {
	const value_a = wrap_a_(a_unwrap)
	let current_value = value_a[0]
	for (let i = 1; i < value_a.length; i++) {
		const value = value_a[i]
		if (current_value !== value) return false
	}
	return true
}
/**
 * Returns function that returns `===` operator to all values in `in_value_a`.
 * @param {unknown[]}in_value_a
 * @returns {(val:unknown)=>boolean}
 */
export function eql_(in_value_a) {
	return val=>eql(wrap_concat(in_value_a, val))
}
export { eql_ as _eql, }
/**
 * Returns function that applies `===` operator to `compare` & `value`.
 * @param {unknown}compare
 * @returns {(val:unknown)=>boolean}
 */
export function eql_2(compare) {
	return val=>val === compare
}
export {
	eql_2 as _eql_fn,
	eql_2 as _fn__eql,
}
