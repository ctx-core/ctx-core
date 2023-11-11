import { concat } from '../concat/index.js'
/**
 * Returns function that returns map of calls to fn_a applying in_arg_a with ...arg_a_
 * @param {import('../_function_types/index.js').map_fn_T[]}fn_a
 * @param {unknown}[in_arg_a]
 * @returns {(...fn_arg_a:unknown[])=>unknown[]}
 */
export function map_apply_(fn_a, in_arg_a = []) {
	return (...fn_arg_a)=>fn_a.map((fn)=>fn(...concat(in_arg_a, fn_arg_a)))
}
export {
	map_apply_ as map_fn_apply_fn,
	map_apply_ as _map_apply,
	map_apply_ as _apply__map,
}
