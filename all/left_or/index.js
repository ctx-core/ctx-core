/// <reference types="../a_nowrap/index.d.ts" />
import { or } from '../or/index.js'
import { wrap_concat } from '../wrap_concat/index.js'
/**
 * Returns function that returns first truthy item in `a_unwrap` or value.
 * @param {a_nowrap_T}a_unwrap
 * @returns {(val:unknown)=>unknown}
 */
export function left_or_(a_unwrap) {
	return val=>or(wrap_concat(a_unwrap, val))
}
export {
	left_or_ as _left_or,
	left_or_ as _or__left,
}
