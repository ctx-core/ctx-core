/// <reference types="../index.d.ts" />
import { wrap_a_ } from '../wrap_a/index.js'
import { wrap_concat } from '../wrap_concat/index.js'
/**
 * Returns `!=` operator to all values in `in_value_a`.
 * @param {wrap_a_T}in_value_a
 * @returns {boolean}
 */
export function neq(in_value_a) {
	const value_a = wrap_a_(in_value_a)
	let current_value = value_a[0]
	for (let i = 1; i < value_a.length; i++) {
		const value = value_a[i]
		if (current_value == value) return false
	}
	return true
}
/**
 * Return function that Returns `!=` operator to all values in `in_value_a`.
 * @param {unknown|unknown[]}in_value_a
 * @returns {(val:unknown)=>boolean}
 */
export function neq_(in_value_a) {
	return val=>neq(wrap_concat(in_value_a, val))
}
export { neq_ as _neq, }
