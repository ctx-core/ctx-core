/**
 * @param {any}obj
 * @returns {boolean}
 */
export function isString(obj) {
	return !!(obj === '' || obj && obj.charCodeAt && obj.substr)
}
