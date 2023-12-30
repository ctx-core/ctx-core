/**
 * @param {(()=>Promise<unknown>)|Promise<unknown>}promise
 * @param {number}ms
 * @param {Error}[error]
 * @returns {Promise<unknown>}
 */
export function promise_timeout(
	promise,
	ms,
	error
) {
	error ??= Error(`Timeout ${ms}ms`)
	let id
	let timeout = new Promise((_resolve, reject)=>{
		id = setTimeout(()=>reject(error), ms)
	})
	let cancel_promise__resolve
	let cancel_promise = new Promise(resolve=>cancel_promise__resolve = resolve)
	let ret_promise = Promise.race([
		typeof promise === 'function' ? promise() : promise,
		timeout,
		cancel_promise,
	]).then(result=>{
		clearTimeout(id)
		return result
	})
	ret_promise.cancel = cancel_promise__resolve
	return ret_promise
}
