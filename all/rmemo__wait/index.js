/// <reference types="../rmemo/index.d.ts" />
/// <reference types="./index.d.ts" />
import { isNumber_ } from '../isNumber/index.js'
import { promise_timeout } from '../promise_timeout/index.js'
import { memo_ } from '../rmemo/index.js'
/**
 * @param {rmemo_T}rmemo
 * @param {(val:unknown)=>unknown}condition_fn
 * @param {number}[timeout]
 * @param {Error}[error]
 * @returns {Promise<*>|Promise<unknown>}
 */
export function rmemo__wait(
	rmemo,
	condition_fn,
	timeout,
	error
) {
	let memo
	const _subscribe_wait = new Promise(resolve=>{
		memo = memo_(()=>{
			if (condition_fn(rmemo())) {
				resolve(rmemo())
			}
		})
		memo()
	})
	let promise =
		isNumber_(timeout)
			? promise_timeout(_subscribe_wait, timeout, error)
			: _subscribe_wait
	// prevent GC
	promise.m = memo
	return promise
}
