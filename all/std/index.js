import { sum_ } from '../add/index.js'
import { mean_ } from '../mean/index.js'
/**
 * sample standard deviation
 */
export function std_(a) {
	if (a.length <= 1) return 0
	const mean = mean_(a)
	const diff_a = a.map((a)=>(a - mean) ** 2
	)
	return Math.sqrt(sum_(diff_a) / (a.length - 1))
}
export { std_ as std, }
