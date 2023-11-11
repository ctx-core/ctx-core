import { isNumber } from '../isNumber/index.js'
import { mean_ } from '../mean/index.js'
export function median_(numerator_a, sorted_ = median_sorted_) {
	if (numerator_a.length === 0) {
		return 0
	} else if (numerator_a.length === 1) {
		return numerator_a[0]
	}
	const sorted = sorted_(numerator_a)
	const half = sorted.length / 2
	return sorted.length % 2 == 0 ? sorted[half] : mean_([
		sorted[Math.ceil(half)],
		sorted[Math.floor(half)]
	])
}
export function median_sorted_(a) {
	return a.filter(isNumber).sort((val0, val1)=>val0 - val1
	)
}
