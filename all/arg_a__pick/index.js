/// <reference types="../_types/index.js" />
import { flag_r__pick } from '../flag_r__pick/index.js'
import { flag_r_arg_a_ } from '../flag_r_arg_a/index.js'
/**
 * @param {string[]}arg_a
 * @param {param_dfn_T}param_dfn_a
 * @returns {string[]}
 */
export function arg_a__pick(
	arg_a,
	...param_dfn_a
) {
	const pick_flag_R = flag_r__pick(arg_a, ...param_dfn_a)
	return flag_r_arg_a_(pick_flag_R, arg_a)
}
export { arg_a__pick as pick_arg_a1, }
