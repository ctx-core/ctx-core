import type { sort_idx_o_T } from '../array_types/index.js'
/**
 * Returns an Array of sorted values from [sort_idx_o_T](#sort_idx_o_T).sort_val_a
 */
export declare function sort_val_a_<
	I extends unknown = unknown
>(
	in_sort_idx_o:sort_idx_o_T<I>
):I[]
export declare function maybe_sort_val_a_<
	I extends unknown = unknown, Or = null
>(
	maybe_sort_idx_ctx:sort_idx_o_T<I>|undefined,
	or?:Or
):I[]|Or
export {
	maybe_sort_val_a_ as maybe_sort_val_a1_fn,
	maybe_sort_val_a_ as _maybe_sort_val_a1,
	sort_val_a_ as sort_val_a1_fn,
	sort_val_a_ as _sort_val_a1,
}
