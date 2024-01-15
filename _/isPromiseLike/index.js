/**
 * @param {unknown}val
 * @returns {boolean}
 */
export function isPromiseLike(val) {
	return val ? typeof val.then === 'function' : false
}
export {
	isPromiseLike as isPromise,
}
