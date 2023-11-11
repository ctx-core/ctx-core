/**
 * @param {number}length
 * @returns {number[]}
 */
export function unit_matrix_(length) {
	const unit_matrix = []
	for (let i = 0; i < length; i++) {
		unit_matrix.push(1)
	}
	return unit_matrix
}
