/**
 * @param {number}start_idx_or_length
 * @param {number}[length]
 * @returns {number[]}
 * @private
 */
export function numeric_range_(start_idx_or_length, length) {
	const start_idx =
		isFinite(length)
			? start_idx_or_length
			: 0
	if (!isFinite(length)) length = start_idx_or_length
	if (length < 0) throw new Error('length must be >= 0')
	const numeric_range = /** @type {number[]} */[]
	for (let idx = start_idx; idx < start_idx + length; idx++) {
		numeric_range.push(idx)
	}
	return numeric_range
}
