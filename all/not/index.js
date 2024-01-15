/// <reference types="../index.d.ts" />
import { wrap_a_ } from '../wrap_a/index.js'
import { wrap_concat } from '../wrap_concat/index.js'
/**
 * Returns not applied to the spread of `in_value_a`
 * @param {a_nowrap_T}in_value_a
 * @returns {boolean}
 */
export function not(in_value_a) {
	const value_a = wrap_a_(in_value_a)
	for (let i = 0; i < value_a.length; i++) {
		const value = value_a[i]
		if (value) return false
	}
	return true
}
/**
 * Returns function that calls [not](#not) with [wrap_concat](#wrap_concat)  of the arguments.
 * @param {a_nowrap_T}a_unwrap
 * @returns {not_T}
 */
export function not_(a_unwrap) {
	return (val_a)=>not(wrap_concat(a_unwrap, val_a))
}
export { not_ as _not, }
