/**
 * Performs a deep clone of the value
 * @param {unknown}obj
 * @returns {unknown}
 */
export function deep_clone(obj) {
	if (obj === undefined) return obj
	return JSON.parse(JSON.stringify(obj))
}
export { deep_clone as clone__deep }
