import { map_fn_T } from '../map_fn/index.js'
/**
 * Map return value of `fn(a[], i)` into an Array.
 */
export declare function map<Val, Out>(
	a:readonly Val[],
	fn:map_fn_T<Val, Out>
):Out[]
export declare function maybe_map<Val, Out, Or = null>(
	maybe_a:readonly Val[]|undefined,
	fn:map_fn_T<Val, Out>,
	or?:Or
):Out[]|Or
/**
 * Returns Function returning [map](#map) with `fn`.
 */
export declare function map_<I, O>(
	fn:(val:I, idx:number)=>O
):(a:readonly I[])=>O[]
export declare function maybe_map_<I, O, Or = null>(
	fn:(val:I, idx:number)=>O,
	or?:Or
):(a:readonly I[]|undefined)=>O[]|Or
export {
	map_ as _map,
	map_ as _fn__map,
	maybe_map_ as _maybe_map,
}
