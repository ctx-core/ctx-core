/**
 * @type {Crypto}
 * @see {@link https://stackoverflow.com/a/70981544/142571}
 */
export const crypto = globalThis.crypto
export async function crypto_() {
	return (
		crypto
		|| import('node:crypto').then($=>
			$.webcrypto))
}
