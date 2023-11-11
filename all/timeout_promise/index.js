import { promise_timeout } from '../promise_timeout/index.js'
/**
 * @param {number}ms
 * @param {Promise<unknown>}promise
 * @returns {Promise<unknown>}
 * @see {@link https://italonascimento.github.io/applying-a-timeout-to-your-promises/}
 * @see {@link http://disq.us/p/1k8w63m}
 */
export async function timeout_promise(ms, promise) {
	return await promise_timeout(promise, ms)
}
export { timeout_promise as _timeout_promise }
