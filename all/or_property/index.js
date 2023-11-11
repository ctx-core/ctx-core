/**
 * Returns first obj property that is truthy
 * @param {unknown}obj
 * @param {string[]}name_a
 * @returns {unknown}
 */
export function or_property(obj, name_a) {
	for (let i = 0; i < name_a.length; i++) {
		const name = name_a[i]
		const value = obj[name]
		if (value) return value
	}
	return
}
export { or_property as or__property }
