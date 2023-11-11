import { assign } from '../assign/index.js'
import { HttpError } from '../http_error/index.js'
/** @typedef {import('./index.d.ts').argument__bad_credentials_error_o_T}argument__bad_credentials_error_o_T */
export const bad_credentials__default__message = 'Unauthorized'
/**
 * @param {string}[message]
 * @param {argument__bad_credentials_error_o_T}[bad_credentials_error_o]
 * @private
 */
export function bad_credentials_error_(
	message,
	bad_credentials_error_o
) {
	return assign(
		new /** @type {any} */BadCredentialsError(
			message ?? bad_credentials__default__message),
		bad_credentials_error_o)
}
/**
 * Throws a Bad Credentials error (HTTP 401)
 * @param {string}[message]
 * @param {argument__bad_credentials_error_o_T}[bad_credentials_error_o]
 * @example
 * bad_credentials__throw(ctx) // Unauthorized
 */
export function bad_credentials__throw(
	message,
	bad_credentials_error_o
) {
	throw bad_credentials_error_(message, bad_credentials_error_o)
}
/** @type {typeof import('./index.d.ts').BadCredentialsError} */
export class BadCredentialsError extends HttpError {
	/**
	 * @param {string}[message]
	 */
	constructor(message) {
		super(message)
		this.name = 'BadCredentialsError'
		this.http__message = bad_credentials__default__message
		this.http__status = 401
		if (!this.message) this.message = this.http__message
	}
}
