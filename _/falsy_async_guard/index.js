/**
 * @param {string}label
 * @param {(()=>Promise<unknown>)}fns
 * @returns {Promise<unknown>}
 */
export async function falsy_async_guard(label, ...fns) {
	for (const fn of fns) {
		const rv = await fn()
		if (rv) return rv
	}
	throw `${label} cannot be falsy`
}
export { falsy_async_guard as falsish_async_guard }
