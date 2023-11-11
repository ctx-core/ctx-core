/**
 * @param {string}label
 * @param {()=>unknown}fn_a
 * @returns {unknown}
 */
export function nullish__guard(label, ...fn_a) {
	for (const fn of fn_a) {
		const rv = fn()
		if (rv != null) return rv
	}
	throw new Error(`${label} cannot be nullish`)
}
export {
	nullish__guard as nullish_guard,
	nullish__guard as nullsy_guard,
}
