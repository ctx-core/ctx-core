import { run } from '../run/index.js'
/**
 * Calls setTimeout
 * @param {()=>unknown}[fn]
 * @param {number}[timeout]
 * @returns {Promise<unknown>}
 */
export function tick(fn, timeout = 0) {
	return new Promise((res, rej)=>{
		if (!timeout) {
			queueMicrotask(()=>
				res(run(fn)))
		} else {
			setTimeout(()=>{
				try {
					res(run(fn))
				} catch (e) {
					rej(e)
				}
			}, timeout)
		}
	})
}
