import { matrix__dot } from '../matrix__dot/index.js'
import { numerator_or_0_sum_ } from '../numerator_or_0_sum/index.js'
/**
 * @param {number[][]}matrices
 * @returns {number}
 */
export function matrix__dot__scalar_(...matrices) {
	return numerator_or_0_sum_(matrix__dot(...matrices))
}
