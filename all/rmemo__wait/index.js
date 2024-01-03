/// <reference types="../rmemo/index.d.ts" />
/// <reference types="./index.d.ts" />
import { timeout_promise } from '../timeout_promise/index.js'
import { memo_ } from '../rmemo/index.js'
/**
 * @param {rmemo_T}rmemo
 * @param {(val:unknown)=>unknown}condition_fn
 * @param {number}[timeout]
 * @param {Error}[error]
 * @returns {cancel_Promise&{ m:memo_T<unknown> }}
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
	/** @type {cancel_Promise&{ m:memo_T<unknown> }} */
	let promise =
		timeout_promise(
			_subscribe_wait,
			timeout ?? Infinity,
			error)
	// prevent GC
	promise.m = memo
	return promise
}
