import { isNumber } from '../isNumber/index.js'
export function quantile_(a, bound_a, sorted_ = quantile_sorted_) {
	const sorted = sorted_(a)
	return bound_a.map((q)=>{
		if (sorted.length === 0) return 0
		const pos = Math.floor((sorted.length - 1) * q)
		const base = pos
		const rest = pos - base
		return sorted[base + 1] !== undefined ? sorted[base] + rest * (sorted[base + 1] - sorted[base]) : sorted[base]
	})
}
export function quantile_sorted_(a) {
	return a.filter(isNumber).sort((val0, val1)=>val0 - val1
	)
}
export { quantile_ as quantile }
