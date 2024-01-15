/**
 * Remove `count = 1` items from `a` at position `idx`.
 * @param {unknown[]}a
 * @param {number}idx
 * @param {number}count
 * @returns {unknown[]}
 */
export function remove_idx(a, idx, count = 1) {
	return a.splice(idx, count)
}
export {
	remove_idx as remove__idx,
	remove_idx as remove__index,
}
