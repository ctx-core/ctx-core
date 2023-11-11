/**
 * Normalization text for a number
 * @example
 * `$${abbreviate__number(amount, {6: 'mm', 9: 'bn', 12: 'tn'})}`
 */
export function abbreviate_number_str_(number, denominations) {
	const float = parseFloat(number)
	if (!float) return '0'
	const exp10 = Math.floor(Math.log10(float))
	const exp10_step = exp10 >= 0 ? -1 : 1
	let denomination = '', denomination_i = exp10
	set_denomination()
	const normalized_float = denomination ? float / Math.pow(10, denomination_i) : float
	const normalized_fixed = normalized_float.toFixed(2)
	return `${normalized_fixed}${denomination}`
	function set_denomination() {
		denomination_i = exp10
		while (denomination_i) {
			denomination = denominations[denomination_i]
			if (denomination) break
			denomination_i = denomination_i + exp10_step
		}
	}
}
export {
	abbreviate_number_str_ as _abbreviate_number_str,
	abbreviate_number_str_ as abbreviate__number,
}
