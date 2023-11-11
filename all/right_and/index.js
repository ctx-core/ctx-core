import { and } from '../and/index.js'
import { wrap_a_ } from '../wrap_a/index.js'
import { wrap_concat } from '../wrap_concat/index.js'
/**
 * Returns function that returns the first falsy from `value` or `a_unwrap` or the last value of `a_unwrap`.
 * @param {import('../a_nowrap/index.js').a_nowrap_T}a_unwrap
 * @returns {(val:unknown)=>unknown}
 */
export function right_and_(a_unwrap) {
	return (val)=>and(wrap_concat(val, ...wrap_a_(a_unwrap)))
}
export {
	right_and_ as _and,
	right_and_ as _and__right,
}
