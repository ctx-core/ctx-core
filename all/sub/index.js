/**
 * Subtracts rest of values from first value
 */
export function sub(values) {
	let val = values[0]
	for (let i = 1; i < values.length; i++) {
		val -= values[i]
	}
	return val
}
