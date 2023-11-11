import { wrap_a_ } from '../wrap_a/index.js'
import { wrap_concat } from '../wrap_concat/index.js'
/**
 * Returns not applied to the spread of `in_value_a`
 * @param {import('../a_nowrap/index.js').a_nowrap_T}in_value_a
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
 * @param {import('../a_nowrap/index.js').a_nowrap_T}a_unwrap
 * @returns {import('../not/index.js').not_T}
 */
export function not_(a_unwrap) {
	return (val_a)=>not(wrap_concat(a_unwrap, val_a))
}
export { not_ as _not, }
