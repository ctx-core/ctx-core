import type { map_fn_T } from '../map_fn/index.js'
/**
 * Returns function that returns map of calls to fn_a applying in_arg_a with ...arg_a_
 */
export declare function map_apply_<Arg, O>(
	fn_a:map_fn_T<Arg, O>[],
	in_arg_a?:Arg[]
):(...fn_arg_a:Arg[])=>O[]
export declare type map_apply_T<Arg, O> = (...fn_arg_a:Arg[])=>O[]
export {
	map_apply_ as map_fn_apply_fn,
	map_apply_ as _map_apply,
	map_apply_ as _apply__map,
}
