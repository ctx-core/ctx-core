/// <reference types="../index.d.ts" />
import { concat } from '../concat/index.js'
/**
 * Returns the map of calls to fn_a with ...arg_a.
 * @param {map_fn_T[]}fn_a
 * @param {unknown}arg_a
 * @returns {unknown[]}
 */
export function map_call(fn_a, ...arg_a) {
	return fn_a.map((fn)=>fn(...arg_a))
}
export { map_call as call__map }
/**
 * Returns function that maps calls to fn_al ...fac_arg_a concat with ...fn_arg_a passed to function
 * @param {map_fn_T[]}fn_a
 * @param {unknown}fac_arg_a
 * @returns {(...fn_arg_a:unknown[])=>unknown[]}
 */
export function map_call_(fn_a, ...fac_arg_a) {
	return (...fn_arg_a)=>map_call(fn_a, ...concat(fac_arg_a, fn_arg_a))
}
export {
	map_call_ as map_a_call_fn,
	map_call_ as map_a1_call_fn,
	map_call_ as _map_call,
	map_call_ as _call__map,
}
