/** @typedef {import('../array_types/index.d.ts').sort_idx_o_T}sort_idx_o_T */
/**
 * Returns an Array of sorted indices from [sort_idx_o_T](#sort_idx_o_T).sort_idx_a
 * @param {sort_idx_o_T}in_sort_idx_o
 * @returns {number[]}
 */
export function sort_idx_a_(in_sort_idx_o) {
	return in_sort_idx_o.sort_idx_a
}
/**
 * @param {sort_idx_o_T|undefined}in_sort_idx_o
 * @param {number[]|null|undefined}or
 * @returns {number[]|null|undefined}
 */
export function maybe_sort_idx_a_(
	in_sort_idx_o, or = null
) {
	return in_sort_idx_o ? sort_idx_a_(in_sort_idx_o) : or
}
export {
	sort_idx_a_ as sort_idx_a1_fn,
	sort_idx_a_ as _sort_idx_a1,
	maybe_sort_idx_a_ as maybe_sort_idx_a1_fn,
	maybe_sort_idx_a_ as _maybe_sort_idx_a1,
}
