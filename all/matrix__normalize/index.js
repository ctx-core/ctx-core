/**
 * @param {number[]}matrix
 * @param {number}columns_length
 * @returns {number[]}
 */
export function matrix__normalize(matrix, columns_length = 2) {
	const normalized_matrix = []
	for (let i = 0; i < matrix.length; i += columns_length) {
		let sum = 0.0
		for (let j = 0; j < columns_length; j++) {
			sum += matrix[i + j] || 0
		}
		for (let j = 0; j < columns_length; j++) {
			const normalized = sum ? matrix[i + j] / sum : 0
			normalized_matrix.push(normalized)
		}
	}
	return normalized_matrix
}
export { matrix__normalize as normalize__row__major__matrix }
