/// <reference types="../a_nowrap/index.d.ts" />
import { and } from '../and/index.js'
import { wrap_concat } from '../wrap_concat/index.js'
/**
 * Returns function that returns the first falsy in `a_unwrap` or `value`.
 * @param {a_nowrap_T}a_unwrap
 * @returns {(val:unknown)=>unknown}
 */
export function left_and_(a_unwrap) {
	return val=>and(wrap_concat(a_unwrap, val))
}
export {
	left_and_ as _left_and,
	left_and_ as _and__left,
}
