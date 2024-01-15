/// <reference lib="dom" />
import { process_release_name } from '../process_release_name/index.js'
/**
 * @type {Crypto}
 * @see {@link https://stackoverflow.com/a/70981544/142571}
 */
export const crypto = globalThis.crypto
export async function crypto_() {
	return (
		crypto
		|| process_release_name && import('node:crypto').then(mod=>mod.webcrypto))
}
