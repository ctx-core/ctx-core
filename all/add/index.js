/// <reference types="../nullish/index.d.ts" />
/**
 * Adds the arguments
 * @param {readonly (number|nullish)[]|nullish}numerator_a
 * @returns {null}
 */
export function add(numerator_a) {
	if (!numerator_a) return null
	let sum = null
	for (const $ of numerator_a) {
		if ($ != null) {
			sum = sum == null ? $ : sum + $
		}
	}
	return sum
}
/**
 * Sum of the numerators
 */
export {
	add as _sum,
	add as sum,
	add as sum_,
}
