/**
 * @param {string}label
 * @param {()=>Promise<unknown>}fn_a
 * @returns {Promise<unknown>}
 */
export async function nullish__guard__async(
	label, ...fn_a
) {
	for (const fn of fn_a) {
		const rv = await fn()
		if (rv != null) return rv
	}
	throw new Error(`${label} cannot be nullish`)
}
export {
	nullish__guard__async as nullish_async_guard,
	nullish__guard__async as nullsy_async_guard,
}
