import { crypto_ } from '../crypto/index.js'
/**
 * @param {import('../hmac_key/index.js').digest__algorithm_T}algorithm
 * @param {string|BufferSource}key
 * @returns {Promise<CryptoKey>}
 * @see https://lukasmurdock.com/web-hmac/
 * @private
 */
export async function hmac_key_(
	algorithm,
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
			hash: algorithm
		},
		true,
		['sign', 'verify'])
}
