/**
 * @param {number}scalar
 * @param {number[]}matrix
 * @returns {number[]}
 */
export function scalar__matrix__multiply(scalar, matrix) {
	const products = []
	for (let i = 0; i < matrix.length; i++) {
		products.push(matrix[i] * scalar)
	}
	return products
}
export {
	scalar__matrix__multiply as multiply_scalar_matrix,
	scalar__matrix__multiply as multiply__scalar__matrix,
}
