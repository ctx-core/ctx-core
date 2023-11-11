/**
 * Returns true if obj has at least 1 key
 * @param {object}obj
 * @returns {boolean}
 */
export function has_some_key(obj) {
	for (let _ in obj) {
		return true
	}
	return false
}
export { has_some_key as has__some__key }
