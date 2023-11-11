/**
 * @param {number[]}matrix
 * @param {number}}columns_length
 * @returns {number[]}
 */
export function columns_nansum_matrix_(matrix, columns_length) {
	const columns_nansum_matrix = []
	for (let j = 0; j < columns_length; j++) {
		let column_sum = 0.0
		for (let i = j; i < matrix.length; i += columns_length) {
			column_sum += matrix[i] || 0
		}
		columns_nansum_matrix.push(column_sum)
	}
	return columns_nansum_matrix
}
export { columns_nansum_matrix_ as _matrix__nansum__columns }
