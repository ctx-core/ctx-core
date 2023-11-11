import type { compare_T } from '../array_types/index.js'
/**
 * Sorts a copy of `a` by the `compare` function.
 */
export declare function sort_a_<
	I extends unknown = unknown
>(
	a:readonly I[],
	compare?:compare_T<I>
):I[]
export declare function maybe_sort_a_<
	I extends unknown = unknown, Or = null
>(
	maybe_a:readonly I[]|undefined,
	compare?:compare_T<I>,
	or?:Or
):I[]|Or
export {
	sort_a_ as sort_a1_,
	sort_a_ as _sort_a1,
	sort_a_ as _a1__sort,
	maybe_sort_a_ as maybe_sort_a1_,
	maybe_sort_a_ as _maybe_sort_a1,
}
