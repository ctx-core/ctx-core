import { fibonacci_number_ } from '../fibonacci_number/index.js'
import { sleep } from '../sleep/index.js'
/**
 * @param {()=>Promise<Response>}fn
 * @param {number}[delay]
 * @returns {Promise<Response>}
 */
export async function waitfor_fibonacci_backoff(fn, delay = 500) {
	let response
	let delay_n = 1
	while (true) {
		response = await fn()
		if (response.status === 429) {
			const fibonacci_number = fibonacci_number_(delay_n)
			const _delay = fibonacci_number * 500
			delay = delay + _delay
			await sleep(delay)
			delay_n++
			continue
		}
		return response
	}
}
export {
	waitfor_fibonacci_backoff as waitfor__backoff__fibonacci,
	waitfor_fibonacci_backoff as _waitfor__ratelimit__backoff__fibonacci,
}
