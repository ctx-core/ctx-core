import { wrap_a_ } from '../wrap_a/index.js'
/**
 * Returns the truthiness of all values in `in_value_a`
 * @param {unknown|unknown[]}in_value_a
 * @returns {boolean}
 */
export function notnot(in_value_a) {
	const value_a = wrap_a_(in_value_a)
	for (let i = 0; i < value_a.length; i++) {
		const value = value_a[i]
		if (!value) return false
	}
	return true
}
/**
 * Returns function that calls [notnot](#notnot) with [wrap_concat](#wrap_concat) of the arguments.
 * @param {unknown|unknown[]}in_value_a
 * @returns {(val:unknown)=>boolean}
 */
export function notnot_(in_value_a) {
	return (val)=>notnot(wrap_concat(in_value_a, val))
}
export { notnot_ as _notnot, }
