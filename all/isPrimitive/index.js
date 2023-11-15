export function isPrimitive(val) {
	return (
		val === null
		|| (typeof val !== 'object' && typeof val !== 'function')
	)
}
