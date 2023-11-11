/**
 * Sort `val_a` by an array of indices in `in_sort_idx_a`.
 * @param {unknown[]}val_a
 * @param {number[]|undefined}in_sort_idx_a
 * @returns {unknown[]}
 */
export function idx_sort_a_(val_a, in_sort_idx_a) {
	const sort_idx_a = in_sort_idx_a
	const idx_sort_a = []
	for (let i = 0; i < sort_idx_a.length; i++) {
		const idx = sort_idx_a[i]
		idx_sort_a.push(val_a[idx])
	}
	return idx_sort_a
}
export {
	idx_sort_a_ as idx_sort_a1_fn,
	idx_sort_a_ as _idx_sort_a1,
	idx_sort_a_ as _a1__sort__idx,
}
/**
 * @param {unknown[]|undefined}in_val_a
 * @param {number[]|undefined}in_sort_idx_a
 * @param {unknown[]|null|undefined}or
 * @returns {unknown[]|null|undefined}
 * @private
 */
export function maybe_idx_sort_a_(
	in_val_a,
	in_sort_idx_a,
	or = null
) {
	if (!in_sort_idx_a || !in_val_a) return or
	return idx_sort_a_(in_val_a, in_sort_idx_a)
}
export {
	maybe_idx_sort_a_ as maybe_idx_sort_a1_fn,
	maybe_idx_sort_a_ as _maybe_idx_sort_a1,
}
