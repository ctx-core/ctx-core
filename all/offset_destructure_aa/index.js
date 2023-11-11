/**
 * Returns 2d Array where `source_a` is destructured into subarray of length `offset`.
 * @param {unknown[]}source_a
 * @param {number}offset
 * @returns {unknown[][]}
 */
export function offset_destructure_aa_(source_a, offset = 1) {
	const offset_destructure_aa = []
	for (let i = 0; i < offset; i++) {
		offset_destructure_aa.push([])
	}
	for (let i1 = 0; i1 < source_a.length; i1++) {
		const val = source_a[i1]
		offset_destructure_aa[i1 % offset].push(val)
	}
	return offset_destructure_aa
}
export {
	offset_destructure_aa_ as offset_destructure_a2_,
	offset_destructure_aa_ as _offset_destructure_a2,
	offset_destructure_aa_ as _a2__destructure__offset,
}
