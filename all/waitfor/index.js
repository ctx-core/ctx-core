import { promise_timeout } from '../promise_timeout/index.js'
import { sleep } from '../sleep/index.js'
/**
 * @param {()=>Promise<boolean>}fn
 * @param {unknown}timeout
 * @param {unknown}[period]
 * @returns {Promise<void>}
 */
export async function waitfor(fn, timeout, period = 0) {
	let cancel
	try {
		await promise_timeout(async ()=>{
			for (; !cancel;) {
				if (await fn()) return
				await sleep(period)
			}
		}, timeout)
	} catch (err) {
		cancel = 1
		throw err
	}
}
