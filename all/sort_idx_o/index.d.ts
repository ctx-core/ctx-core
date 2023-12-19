import type { compare_T, sort_idx_ctx__T, sort_idx_o_T } from '../array_types/index.js'
/**
 * Returns a [sort_idx_o_T](#sort_idx_o_T).
 */
export declare function sort_idx_o_<I>(
	maybe_a:readonly I[]|undefined,
	compare?:compare_T<I>
):sort_idx_o_T<I>
export {
	sort_idx_o_ as sort_idx_ctx_,
	sort_idx_o_ as _sort_idx_ctx,
	sort_idx_o_ as _ctx__idx__sort,
	sort_idx_o_ as _fn__sort_idx_ctx,
}
/**
 * Returns function that returns [_sort_idx_ctx](#_sort_idx_ctx).
 */
export declare function sort_idx_o__<I>(
	compare?:compare_T<I>
):sort_idx_ctx__T<I>
export {
	sort_idx_o__ as sort_idx_ctx__,
	sort_idx_o__ as sort_idx_ctx_2,
	sort_idx_o__ as _sort_idx_ctx_fn,
}
