/// <reference types="../rmemo/index.d.ts" />
/// <reference types="./index.d.ts" />
import { isNumber_ } from '../isNumber/index.js'
import { promise_timeout } from '../promise_timeout/index.js'
import { memo_ } from '../rmemo/index.js'
/**
 * @param {rmemo_T}rmemo
 * @param {(val:unknown)=>unknown}condition_fn
 * @param {number}[timeout]
 * @returns {Promise<*>|Promise<unknown>}
 */
export function rmemo__wait(rmemo, condition_fn, timeout) {
	const _subscribe_wait = new Promise(resolve=>{
		memo_(()=>{
			if (condition_fn(rmemo())) {
				resolve(rmemo())
			}
		})()
	})
	return isNumber_(timeout) ? promise_timeout(_subscribe_wait, timeout) : _subscribe_wait
}
