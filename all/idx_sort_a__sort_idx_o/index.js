import { idx_sort_a_ } from '../idx_sort_a/index.js'
/**
 * Returns [sort_idx_o_T](#sort_idx_o_T) derived from `val_a` sorted by `sort_idx_a`.
 * @param {unknown[]}val_a
 * @param {number[]}sort_idx_a
 * @returns {import('../array_types/index.js').sort_idx_o_T<unknown>}
 */
export function idx_sort_a__sort_idx_o_(val_a, sort_idx_a) {
	const sort_val_a = idx_sort_a_(val_a, sort_idx_a)
	return {
		sort_val_a,
		sort_idx_a
	}
}
export {
	idx_sort_a__sort_idx_o_ as idx_sort_a_sort_idx_o_,
	idx_sort_a__sort_idx_o_ as idx_sort_a_sort_idx_ctx_,
	idx_sort_a__sort_idx_o_ as idx_sort_a1_sort_idx_ctx_,
	idx_sort_a__sort_idx_o_ as _idx_sort_a1_sort_idx_ctx,
	idx_sort_a__sort_idx_o_ as _ctx__idx__sort__a1__sort__idx,
}
