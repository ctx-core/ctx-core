/**
 * Returns idx of first match in `a` with `compare`.
 * @param {unknown[]|undefined}in_a
 * @param {import('../array_types/index.js').is_match__T}compare
 * @returns {number}
 */
export function idx_(in_a, compare) {
	if (in_a) {
		const a = in_a
		for (let idx = 0; idx < a.length; idx++) {
			const value = a[idx]
			if (value === compare || typeof compare === 'function' && compare(value, idx)) return idx
		}
	}
	return -1
}
export { idx_ as _idx, }
