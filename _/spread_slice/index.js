/// <reference types="../index.d.ts" />
import { slice } from '../slice/index.js'
/**
 * Returns a function that slices the spread argument array with `arg_a`
 * @param {unknown}arg_a
 * @returns {spread_slice__arg_T}
 */
export function spread_slice_(...arg_a) {
	return (...a)=>slice(a, ...arg_a)
}
export {
	spread_slice_ as _spread_slice,
	spread_slice_ as _slice__spread,
	spread_slice_ as _fn__slice__spread,
}
