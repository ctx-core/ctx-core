import { Cancel } from '../cancel/index.js'
import { timeout_promise } from '../timeout_promise/index.js'
import { sleep } from '../sleep/index.js'
/**
 * @param {()=>Promise<unknown>}fn
 * @param {number}timeout
 * @param {number|(()=>Promise<unknown>)}[period]
 * @returns {Promise<unknown>}
 */
export function waitfor(
	fn,
	timeout,
	period
) {
	let rv
	let cancel_arg_a
	let promise = new Promise((resolve, reject)=>
		timeout_promise(async ()=>{
			for (; !cancel_arg_a;) {
				let _rv = await fn()
				rv = cancel_arg_a?.length ? cancel_arg_a[0] : _rv
				if (rv || cancel_arg_a) return rv
				if (typeof period === 'function') {
					await period(promise)
				} else {
					await sleep(period ?? 0)
				}
			}
			return rv
		}, timeout)
			.then(resolve)
			.catch(err=>{
				cancel_arg_a = []
				reject(err)
			}))
	promise.cancel = (...arg_a)=>{
		cancel_arg_a = arg_a
		return promise
	}
	return promise
}
export { waitfor as waitfor_val, waitfor as waitfor_val_ }
/**
 * @param {number}ms
 * @param {()=>boolean}should_cancel_
 * @param {Cancel_config_T}[Cancel_config]
 * @returns {(promise:Promise<unknown>&{cancel():unknown})=>Promise<number>}
 * @private
 */
export function cancel__period_(
	ms,
	should_cancel_,
	Cancel_config
) {
	return promise=>{
		if (should_cancel_()) {
			promise.cancel()
			throw new Cancel(Cancel_config)
		}
		return sleep(ms)
	}
}
