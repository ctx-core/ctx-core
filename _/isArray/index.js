export const native_isArray = Array.isArray
/**
 * Is the argument an Array?
 * @param {unknown}obj
 * @returns {boolean}
 */
export function isArray(obj) {
	return native_isArray ? native_isArray(obj) : toString.call(obj) === '[object Array]'
}
