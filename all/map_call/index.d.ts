import type { map_fn_T } from '../map_fn/index.js'
/**
 * Returns the map of calls to fn_a with ...arg_a.
 */
export declare function map_call<I, O>(fn_a:map_fn_T<I, O>[], ...arg_a:I[]):O[]
export { map_call as call__map }
/**
 * Returns function that maps calls to fn_al ...fac_arg_a concat with ...fn_arg_a passed to function
 */
export declare function map_call_<I, O>(
	fn_a:map_fn_T<I, O>[],
	...fac_arg_a:I[]
):(...fn_arg_a:I[])=>O[]
export {
	map_call_ as map_a_call_fn,
	map_call_ as map_a1_call_fn,
	map_call_ as _map_call,
	map_call_ as _call__map,
}
