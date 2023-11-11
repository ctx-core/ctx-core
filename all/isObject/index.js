/**
 * Returns boolean of `val` is an object
 * @param {unknown}val
 * @returns {boolean}
 */
export function isObject(val) {
	return !!(val && new String(val) === '[object Object]')
}
export {
	isObject as _is_Object,
	isObject as _is__Object,
}
