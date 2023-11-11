/**
 * Insert `...item_a` into `a` at position `idx`.
 * @param {unknown[]}a
 * @param {number}idx
 * @param {unknown}item_a
 * @returns {unknown}
 */
export function insert(a, idx, ...item_a) {
	return a.splice(idx, 0, ...item_a)
}
