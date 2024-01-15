/// <reference types="../crypto__sign/index.d.ts" />
import { crypto_ } from '../crypto/index.js'
/**
 * @param {crypto__sign__algorithm_T}algorithm
 * @param {CryptoKey}key
 * @param {BufferSource}data
 * @returns {Promise<ArrayBuffer>}
 */
export async function crypto__sign(
	algorithm,
	key,
	data
) {
	if (typeof data === 'string') {
		data = new TextEncoder().encode(/** @type {string} */data)
	}
	const crypto = await crypto_()
	return crypto.subtle.sign(algorithm, key, data)
}
