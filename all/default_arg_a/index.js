import { a_some } from '../a_some/index.js'
import { every } from '../every/index.js'
import { flag_a_ } from '../flag_a/index.js'
import { flag_r_ } from '../flag_r/index.js'
import { keys } from '../keys/index.js'
/**
 * @param {string[]}arg_a
 * @param {Record<string, param_dfn_T>}value_R_param_dfn
 * @param {string[]}cancel_a
 * @returns {string[]}
 */
export function default_arg_a_(
	arg_a,
	value_R_param_dfn = {},
	cancel_a = []
) {
	const default_arg_a = arg_a.slice(0)
	const flag_h = flag_r_(default_arg_a)
	if (
		a_some(keys(flag_h), flag=>cancel_a.indexOf(flag) > -1
		)) {
		return default_arg_a
	}
	for (let param_dfn in value_R_param_dfn) {
		const flag_a = flag_a_(param_dfn)
		if (every(flag_a, (flag)=>!(flag in flag_h)
		)) {
			const value = value_R_param_dfn[param_dfn]
			const $value = typeof value === 'function' ? value() : value
			const flag1 = find(flag_a, (flag)=>/^--/.test(flag)
			) || flag_a[0]
			default_arg_a.push(flag1, $value)
		}
	}
	return default_arg_a
}
export {
	default_arg_a_ as default_arg_a1_fn,
	default_arg_a_ as _default_arg_a1,
	default_arg_a_ as _a1__arg__default,
}
