import type { wrap_a_T2 } from '../wrap_a/index.js'
/**
 * Returns first return value of `fn(a[idx], idx)` where `fn(a[idx], idx)` is truthy.
 */
export declare function map_find<
	In extends unknown = unknown, Out extends unknown = In
>(
	a:wrap_a_T2<In>,
	fn:(val:In, idx:number)=>Out
):Out|undefined
export declare function maybe_map_find<
	In extends unknown = unknown,
	Out extends unknown = In,
	Or = null
>(
	maybe_a:wrap_a_T2<In>,
	fn:(val:In, idx:number)=>Out,
	or?:Or
):Out|Or
export { map_find as find__map, }
/**
 * Returns function that returns value from [map_find](#map_find) with `fn` argument.
 */
export declare function map_find_<
	In extends unknown = unknown, Out extends unknown = In
>(
	fn:(val:In, idx:number)=>Out
):(a:wrap_a_T2<In>)=>Out|undefined
export {
	map_find_ as _map_find,
	map_find_ as _find__map,
}
