/**
 * Returns an Array of sorted indices inverted from `idx_a`.
 * @param in_idx_a{number[]|unknown}
 * @returns {number[]|unknown}
 * @example `invert_idx_a_([2, 1, 3, 0]) -> [3, 1, 0, 2]`
 */
export function invert_idx_a_(in_idx_a) {
	if (!in_idx_a) return
	const idx_a = in_idx_a
	const invert_idx_a = []
	for (let i = 0; i < idx_a.length; i++) {
		invert_idx_a[idx_a[i]] = i
	}
	return invert_idx_a
}
export {
	invert_idx_a_ as invert_idx_a1_fn,
	invert_idx_a_ as _invert_idx_a1,
	invert_idx_a_ as _a1__idx__invert,
}
