/**
 * Averages the items in passed in array
 */
export function fn_mean_(a, numerator_) {
	if (!a) return null
	let sum = 0
	let count = 0
	for (let i = 0; i < a.length; i++) {
		const val = numerator_(a[i])
		if (val != null) {
			sum += val
			count++
		}
	}
	return sum / count
}
export {
	fn_mean_ as fn_avg,
	fn_mean_ as _fn_avg,
	fn_mean_ as _avg__fn,
}
