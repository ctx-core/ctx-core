/// <reference types="../a_nowrap/index.d.ts" />
/// <reference types="../eq/index.d.ts" />
import { wrap_a_ } from '../wrap_a/index.js'
import { wrap_concat } from '../wrap_concat/index.js'
/**
 * Returns `==` operator to all values in `a_nowrap`.
 * @param {a_nowrap_T}a_nowrap
 * @returns {boolean}
 */
export function eq(a_nowrap) {
	const value_a = wrap_a_(a_nowrap)
	let current_value = value_a[0]
	for (let i = 1; i < value_a.length; i++) {
		const value = value_a[i]
		if (current_value != value) return false
	}
	return true
}
/**
 * Returns function that returns `==` operator to all values in `in_value_aS`.
 * @param {a_nowrap_T}a_nowrap
 * @returns {eq_fn_T}
 */
export function eq_(a_nowrap) {
	return value=>eq(wrap_concat(a_nowrap, value))
}
export {
	eq_ as _eq,
	eq_ as _fn__eq,
}
