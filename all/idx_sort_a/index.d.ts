/**
 * Sort `val_a` by an array of indices in `in_sort_idx_a`.
 */
export declare function idx_sort_a_<
	I extends unknown = unknown
>(
	val_a:readonly I[],
	in_sort_idx_a:readonly number[]|undefined
):I[]
export declare function maybe_idx_sort_a_<
	I = unknown, Or = null
>(
	in_val_a:readonly I[]|undefined,
	in_sort_idx_a:readonly number[]|undefined,
	or?:Or
):I[]|Or
export {
	idx_sort_a_ as idx_sort_a1_fn,
	idx_sort_a_ as _idx_sort_a1,
	idx_sort_a_ as _a1__sort__idx,
	maybe_idx_sort_a_ as maybe_idx_sort_a1_fn,
	maybe_idx_sort_a_ as _maybe_idx_sort_a1,
}
