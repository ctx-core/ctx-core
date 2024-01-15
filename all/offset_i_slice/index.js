/**
 * Returns an Array from slicing an array from an array's offset from position i
 * @param {unknown[]}a
 * @param {number}i
 * @param {number}offset
 * @returns {unknown[]}
 */
export function offset_i_slice(a, i, offset = 1) {
	return a.slice(i * offset, (i + 1) * offset)
}
/**
 * @param {unknown[]|undefined}maybe_a
 * @param {number}i
 * @param {number}offset
 * @param {unknown[]|null|undefined}or
 * @returns {unknown[]|null|undefined}
 */
export function maybe_offset_i_slice(
	maybe_a,
	i,
	offset = 1,
	or = null
) {
	return maybe_a ? maybe_a.slice(i * offset, (i + 1) * offset) : or
}
export { offset_i_slice as slice__i__offset, }
