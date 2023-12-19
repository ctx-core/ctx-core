import type { compare_T } from '../array_types/index.js'
/**
 * Sort items in `a` by the `compare` function
 */
export declare function sort<I, O extends unknown[] = I[]>(
	a:readonly I[], compare?:compare_T<I>
):O
export declare function maybe_sort<I, O = readonly I[], Or = null>(
	maybe_a:readonly I[]|undefined,
	compare?:compare_T<I>,
	or?:Or
):O|Or
/**
 * Returns a Function that calls [sort](#sort) with the given `compare` function.
 */
export declare function sort_<I>(
	compare?:compare_T<I>
):(a:readonly I[])=>I[]
export declare function maybe_sort_<I, Or = null>(
	compare?:compare_T<I>,
	or?:Or
):(maybe_a:readonly I[]|undefined)=>I[]|Or
export {
	sort_ as _sort,
	sort_ as _fn__sort,
	maybe_sort_ as _maybe_sort,
}
