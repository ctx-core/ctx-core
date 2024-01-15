/**
 * Calls setTimeout
 * @param {()=>unknown}[fn]
 * @param {number}[timeout]
 * @returns {Promise<unknown>}
 */
export function tick(fn, timeout = 0) {
	return new Promise((resolve, reject)=>{
		if (!timeout) {
			queueMicrotask(()=>
				resolve(fn?.()))
		} else {
			setTimeout(()=>{
				try {
					resolve(fn?.())
				} catch (e) {
					reject(e)
				}
			}, timeout)
		}
	})
}
