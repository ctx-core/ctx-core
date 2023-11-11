import type { andand_key_T } from '../andand/index.js'
/**
 * Returns Array of mapped `a` with `_andand(...name_a)`.
 */
export declare function map_andand<
	In extends unknown = unknown, Out extends unknown = unknown
>(
	a:readonly In[],
	...name_a:readonly andand_key_T<In>[]
):Out[]
export declare function maybe_map_andand<
	Val extends unknown, Out extends unknown
>(
	a:readonly Val[]|undefined,
	...name_a:readonly andand_key_T<Val>[]
):Out[]|undefined
export { map_andand as map__andand, }
/**
 * Returns function that returns value from [map_andand](#map_andand) with `...attr_a`.
 */
export declare function map_andand_<
	In extends unknown, Out extends unknown
>(
	...attr_a:readonly andand_key_T<In>[]
):(a:readonly In[])=>Out[]
export {
	map_andand_ as _map_andand,
	map_andand_ as _map__andand,
	map_andand_ as _fn__map__andand,
}
