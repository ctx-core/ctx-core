/**
 * Returns Array of `[value, key]` in `obj`
 * @param {object}obj
 * @returns {[string, string][]}
 * @private
 */
export function value_key_aa_(obj) {
	const value_key_aa = []
	for (let key in obj) {
		value_key_aa.push([
			obj[key],
			key
		])
	}
	return value_key_aa
}
export {
	value_key_aa_ as value_key_a2_,
	value_key_aa_ as _a2__key__value,
}
