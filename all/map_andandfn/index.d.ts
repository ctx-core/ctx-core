import type { andand_key_T } from '../andand/index.js'
/**
 * Returns Array of mapped `a` with `andandfn_(...attr_a)`
 */
export declare function map_andandfn<
	In extends unknown = unknown, Out extends unknown = unknown
>(
	a:readonly In[],
	...attr_a:readonly andand_key_T<In>[]
):Out[]
export {
	map_andandfn as map__andand_,
	map_andandfn as map__andand__fn,
}
/**
 * Returns function that returns value from [map_andand_](#map_andand_) with `...attr_a`.
 */
export declare function map_andandfn_<
	Val extends unknown, Out extends unknown
>(
	...attr_a:readonly andand_key_T<Val>[]
):(a:readonly Val[])=>Out[]
export {
	map_andandfn_ as map_andand_2,
	map_andandfn_ as _map_andand_,
	map_andandfn_ as _map__andand_,
	map_andandfn_ as _fn__map__andand__fn,
}
