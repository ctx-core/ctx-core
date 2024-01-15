import { wrap_a_ } from '../wrap_a/index.js'
import { wrap_concat } from '../wrap_concat/index.js'
/**
 * Returns `===` operator to all values in `a_unwrap`.
 * @param {unknown}a_unwrap
 * @returns {boolean}
 */
export function eql(a_unwrap) {
	let [cmp_val, ...rest] = wrap_a_(a_unwrap)
	for (let val of rest) {
		if (cmp_val !== val) return false
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
