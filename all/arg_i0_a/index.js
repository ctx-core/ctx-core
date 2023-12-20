/// <reference types="../slice_arg_spread_a/index.d.ts" />
import { slice_arg_spread_a_ } from '../slice_arg_spread_a/index.js'
/** @typedef {slice_arg_spread_a__arg__T} */
/**
 * Returns a function that calls fn passing only the first argument.
 * @param {slice_arg_spread_a__arg__T}fn
 * @returns {slice_arg_spread_a___ret_T}
 */
export function arg_i0_a(fn) {
	return slice_arg_spread_a_(fn, 0, 1)
}
export { arg_i0_a as arg__0__ }
