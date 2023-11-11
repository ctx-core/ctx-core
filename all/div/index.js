/**
 * Divides rest of values from the first val
 */
export function div(values) {
	let val = values[0]
	for (let i = 1; i < values.length; i++) {
		val /= values[i]
	}
	return val
}
