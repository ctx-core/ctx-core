import { concat } from '../concat/index.js'
import { or } from '../or/index.js'
import { wrap_a_ } from '../wrap_a/index.js'
/**
 * Returns function that returns first truthy or last item in `a_unwrap`.
 * @param {import('../a_nowrap/index.js').a_nowrap_T}a_unwrap
 * @returns {(fn_a_unwrap:unknown)=>unknown}
 */
export function right_or_(a_unwrap) {
	return fn_a_unwrap=>or(concat(wrap_a_(fn_a_unwrap), ...wrap_a_(a_unwrap)))
}
export {
	right_or_ as _right_or,
	right_or_ as _or__right,
	right_or_ as _or,
}
