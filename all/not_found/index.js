import { assign } from '../assign/index.js'
import { HttpError } from '../http_error/index.js'
/** @typedef {import('../error_o/index.d.ts').argument__error_o_T} */
export const not_found__default__message = 'Not Found'
/**
 * @param {string}[message]
 * @param {argument__error_o_T}[error_o]
 * @returns {NotFoundError}
 * @private
 */
export function not_found_error_(
	message,
	error_o
) {
	return assign(
		new NotFoundError(message ?? not_found__default__message),
		error_o)
}
/**
 * Throws a Not Found error (HTTP 401)
 * @param {string}[message]
 * @param {argument__error_o_T}[error_o]
 * @example
 * not_found__throw(error_o) // Not Found
 */
export function not_found__throw(
	message,
	error_o
) {
	throw not_found_error_(message, error_o)
}
/** @type {import('./index.d.ts').NotFoundError} */
export class NotFoundError extends HttpError {
	/**
	 * @param {string}[message]
	 */
	constructor(message) {
		super(message)
		this.name = 'NotFoundError'
		this.http__status = 404
		this.http__message = not_found__default__message
		if (!this.message) this.message = this.http__message
	}
}
