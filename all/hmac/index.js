import { buffer__hex_ } from '../buffer__hex/index.js'
import { crypto__sign } from '../crypto__sign/index.js'
import { hmac_key_ } from '../hmac_key/index.js'
/**
 * @param {import('../hmac/index.js').digest__algorithm_T}algorithm
 * @param {string|BufferSource|CryptoKey}key
 * @param {string|BufferSource}data
 * @returns {Promise<string>}
 * @see https://lukasmurdock.com/web-hmac/
 * @private
 */
export async function hmac_(
	algorithm,
	key,
	data
) {
	if (!key.algorithm) {
		key = await hmac_key_(algorithm, key)
	}
	if (typeof data === 'string') {
		const encoder = new TextEncoder()
		data = encoder.encode(data)
	}
	/**
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/sign#hmac_2
	 */
	const signature = await crypto__sign(
		'HMAC',
		key,
		data)
	return buffer__hex_(signature)
}
