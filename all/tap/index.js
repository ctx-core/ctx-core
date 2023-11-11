/** @typedef {import('../tap/index.d.ts').tap__interceptor_T} */
/**
 * Invokes interceptor with the obj, and then returns the object.
 * The primary purpose of this method is to "tap into" a method chain,
 * to perform operations on intermediate results within the chain.
 * @param {unknown}obj
 * @param {tap__interceptor_T}interceptor
 * @returns {unknown}
 * @see {@link https://underscorejs.org/#tap}
 */
export function tap(obj, interceptor) {
	interceptor(obj)
	return obj
}
/**
 * Returns function that calls tap with obj.
 * @param {tap__interceptor_T}fn
 * @returns {(val:unknown)=>unknown}
 */
export function tap_(fn) {
	return val=>{
		fn(val)
		return val
	}
}
export { tap_ as _tap, }
