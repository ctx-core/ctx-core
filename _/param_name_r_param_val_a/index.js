import { flag_r_param_name_ } from '../flag_r_param_name/index.js'
import { flag_regex } from '../flag_regex/index.js'
export function param_name_r_param_val_a_(arg_a, param_name_r_param_dfn) {
	const param_name_r_param_val_a = {}
	const flag_r_param_name = flag_r_param_name_(param_name_r_param_dfn)
	let i = 0
	while (i < arg_a.length) {
		const flag = arg_a[i]
		const match = flag_regex.test(flag)
		let j = i + 1
		if (match) {
			const param_name = flag_r_param_name[flag] || flag
			if (!param_name_r_param_val_a[param_name]) param_name_r_param_val_a[param_name] = []
			const param_value_a = param_name_r_param_val_a[param_name]
			while (j < arg_a.length && !flag_regex.test(arg_a[j])) {
				const param_value = arg_a[j]
				param_value_a.push(param_value)
				j += 1
			}
		}
		i = j
	}
	return param_name_r_param_val_a
}
export {
	param_name_r_param_val_a_ as param_name_R_param_val_a_,
	param_name_r_param_val_a_ as param_value_h_param_name_,
	param_name_r_param_val_a_ as _param_value_h_param_name,
}
