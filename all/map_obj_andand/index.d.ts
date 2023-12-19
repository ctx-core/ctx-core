import type { andand_key_T } from '../andand/index.js'
import type { nullish } from '../nullish/index.js'
/**
 * Map `values` `andand` `key_a` in `obj` to `fn`, returning object with values return by `fn`.
 */
export declare function map_obj_andand<In, Out>(
	obj:Record<string, In>,
	...key_a:andand_key_T<In>[]
):Record<string, Out|nullish>
export { map_obj_andand as map__obj__andand }
/**
 * Returns function to
 * map `values` `andand` `key_a` in `obj` to `fn`, returning object with values return by `fn`.
 */
export declare function map_obj_andand_<In, Out = In>(
	...key_a:andand_key_T<In>[]
):(obj:Record<string, In>)=>Record<string, Out|nullish>
export {
	map_obj_andand_ as _map_obj_andand,
	map_obj_andand_ as _map__obj__andand,
	map_obj_andand_ as _fn__map__obj__andand,
}
