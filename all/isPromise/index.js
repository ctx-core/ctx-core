/**
 * @param {unknown}val
 * @returns {boolean}
 */
export function isPromise(val) {
	return val ? typeof val.then === 'function' : false
}
