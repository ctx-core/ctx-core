/**
 * @param {RegExp|string}pattern
 * @param {string}flags
 * @returns {RegExp}
 */
export function re_(pattern, flags) {
	return new RegExp(pattern, flags)
}
