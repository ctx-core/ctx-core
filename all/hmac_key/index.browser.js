/// <reference types="../hmac_key/index.d.ts" />
import { crypto_ } from '../crypto/index.browser.js'
/**
 * @param {digest__algorithm_T}hash
 * @param {string|BufferSource}key
 * @returns {Promise<CryptoKey>}
 * @see https://lukasmurdock.com/web-hmac/
 * @private
 */
export async function hmac_key_(
	hash,
	key
) {
	if (typeof key === 'string') {
		const encoder = new TextEncoder()
		key = encoder.encode(key)
	}
	const crypto = await crypto_()
	/**
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey
	 */
	return crypto.subtle.importKey(
		'raw',
		key,
		{
			name: 'HMAC',
			hash: hash
		},
		true,
		['sign', 'verify'])
}
