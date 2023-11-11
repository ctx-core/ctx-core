import { add } from '../add/index.js'
import { number__count_ } from '../number__count/index.js'
/**
 * Average of the numerator_a
 */
export function mean_(numerator_a) {
	const sum = add(numerator_a)
	const number__count = number__count_(numerator_a)
	return (
		sum == null
			? null
			: sum / number__count)
}
export {
	mean_ as avg,
	mean_ as mean,
}
