/**
 * @param {any[][]}arrays
 * @returns {number}
 */
export function matrix__validate_length(...arrays) {
	const length = arrays[0].length
	for (let i = 1; i < arrays.length; i++) {
		if (length != arrays[i].length) {
			throw new Error('array lengths are not equal')
		}
	}
	return length
}
