/**
 * Buffer to hex string:
 * - convert buffer to byte array
 * - convert bytes to hex string
 * @param {ArrayBuffer}buffer
 * @returns {string}
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest#converting_a_digest_to_a_hex_string
 * @see https://lukasmurdock.com/web-hmac/
 */
export function buffer__hex_(buffer) {
	return Array.from(new Uint8Array(buffer))
		.map((b)=>b.toString(16).padStart(2, '0'))
		.join('')
}
