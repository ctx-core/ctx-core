/// <reference types="../hex__digest/index.d.ts" />
import { crypto_ } from '../crypto/index.browser.js'
/**
 * @param {digest__algorithm_T}algorithm
 * @param {string|BufferSource}message
 * @returns {Promise<string>}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest}
 */
export async function hex__digest(
	algorithm,
	message,
) {
	if (typeof message === 'string') {
		// encode as (utf-8) Uint8Array
		message = new TextEncoder().encode(message)
	}
	const crypto = await crypto_()
	const hash_buffer =
		await crypto.subtle.digest(algorithm, message) // hash the message
	const hash_array =
		Array.from(new Uint8Array(hash_buffer)) // convert hash_buffer to byte array
	return hash_array
		.map((b)=>b.toString(16).padStart(2, '0'))
		.join('') // convert bytes to hex string
}
