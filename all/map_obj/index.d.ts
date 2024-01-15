import type { nullish } from '../nullish/index.js'
/**
 * Maps values in `in_obj` to `fn`, returning object with values returned by `fn`.
 */
export declare function map_obj<In, Out = In>(
	in_obj:Record<string, In>,
	fn:map_obj_fn_T<In, Out>
):Record<string, Out|nullish>
export declare type map_obj_fn_T<Val, Out = Val> = (in_obj:Val, key:string)=>Out
export { map_obj as map__obj }
/**
 * Returns function to map `obj` to `fn` returning object with values.
 */
export declare function map_obj_<In, Out = In>(
	fn:map_obj_fn_T<In, Out>
):(obj:Record<string, In>)=>Record<string, Out|nullish>
export {
	map_obj_ as _map_obj,
	map_obj_ as _map__obj,
	map_obj_ as _fn__map__obj,
}
