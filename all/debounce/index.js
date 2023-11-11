import { isPromise } from '../isPromise/index.js'
/**
 * Returns an async function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 * @param {(...args:unknown[])=>unknown}func
 * @param {number}wait
 * @param {boolean}[immediate]
 * @returns {(this:unknown, ...args:unknown[])=>(unknown|Promise<unknown>)}
 * @see {@link https://davidwalsh.name/javascript-debounce-function}
 */
export function debounce(func, wait, immediate) {
	let timeout, promise, resolve, reject
	return async function(...arg_a) {
		if (!promise) promise = new Promise((in_resolve, in_reject)=>{
			resolve = in_resolve
			reject = in_reject
		})
		const apply_this = this
		const later = async ()=>{
			timeout = null
			promise = null
			if (!immediate) {
				await invoke()
			}
		}
		const callNow = immediate && !timeout
		clearTimeout(timeout)
		timeout = setTimeout(later, wait)
		if (callNow) {
			await invoke()
		}
		return promise
		async function invoke() {
			try {
				const in_rv = func.apply(apply_this, arg_a)
				resolve(isPromise(in_rv) ? await in_rv : in_rv)
			} catch (e) {
				reject(e)
			}
		}
	}
}
