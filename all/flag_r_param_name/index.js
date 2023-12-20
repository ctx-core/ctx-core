/// <reference types="../types/index.d.ts" />
import { each } from '../each/index.js'
import { flag_a_ } from '../flag_a/index.js'
/**
 * @param {param_name_r_param_dfn_T}param_dfn_r_param_name
 * @returns {Record<string, string>}
 */
export function flag_r_param_name_(
	param_dfn_r_param_name
) {
	const flag_R_param_name = {}
	for (let param_name in param_dfn_r_param_name) {
		const param_dfn = param_dfn_r_param_name[param_name]
		const flag_a = flag_a_(param_dfn)
		each(flag_a, flag=>
			flag_R_param_name[flag] = param_name)
	}
	return flag_R_param_name
}
export {
	flag_r_param_name_ as flag_R_param_name_,
	flag_r_param_name_ as flag_h_param_name_,
	flag_r_param_name_ as _flag_h_param_name,
}
