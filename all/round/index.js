/**
 * @see {@link: https://stackoverflow.com/questions/10015027/javascript-tofixed-not-rounding/32605063#32605063}
 */
export function round(in_value, digits = 2) {
	if (digits === undefined) {
		digits = 0
	}
	if (digits === 0) {
		return Math.round(in_value)
	}
	const multiplicator = Math.pow(10, digits)
	const rounding_multiplied_value = parseFloat((in_value * multiplicator).toFixed(11))
	return Math.round(rounding_multiplied_value) / multiplicator
}
