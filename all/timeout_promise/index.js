import { Timeout } from '../timeout/index.js'
/**
 * @param {(()=>Promise<unknown>)|Promise<unknown>}promise
 * @param {number|Infinity}ms
 * @param {Error}[error]
 * @returns {cancel_Promise}
 */
export function timeout_promise(
	promise,
	ms,
	error
) {
	error ??= new Timeout(ms)
	let id
	let timeout =
		ms !== Infinity
			? new Promise((_resolve, reject)=>{
				id = setTimeout(()=>reject(error), ms)
			})
			: undefined
	let cancel_promise__resolve
	let cancel_promise =
		new Promise(resolve=>
			cancel_promise__resolve = resolve)
	/** @type {cancel_Promise} */
	let ret_promise = Promise.race([
		typeof promise === 'function' ? promise() : promise,
		timeout,
		cancel_promise,
	]).finally(()=>clearTimeout(id))
	ret_promise.cancel = cancel_promise__resolve
	return ret_promise
}
export { timeout_promise as promise_timeout }
