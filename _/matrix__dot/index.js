import { matrix__validate_length } from '../matrix__validate_length/index.js'
/**
 * @param {number[][]}matrices
 * @returns {number[]}
 */
export function matrix__dot(...matrices) {
	const length = matrix__validate_length(matrices)
	const products = []
	for (let j = 0; j < length; j++) {
		let product = matrices[0][j]
		for (let i = 1; i < matrices.length; i++) {
			product *= matrices[i][j]
		}
		products.push(product)
	}
	return products
}
export {
	matrix__dot as mul_dot,
	matrix__dot as multiply_dot,
	matrix__dot as dotMultiply,
}
