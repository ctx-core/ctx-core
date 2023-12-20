/// <reference types="../index.d.ts" />
/**
 * @returns {promise_o_T}
 */
export function promise_o_() {
	let resolve = null, reject = null
	const promise = new Promise((in_resolve, in_reject)=>{
		resolve = in_resolve
		reject = in_reject
	})
	return { promise, resolve, reject, }
}
