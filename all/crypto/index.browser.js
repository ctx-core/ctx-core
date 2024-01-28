/// <reference lib="dom" />
/**
 * @type {Crypto}
 * @see {@link https://stackoverflow.com/a/70981544/142571}
 */
export const crypto = globalThis.crypto
export function crypto_() {
	return crypto
}
