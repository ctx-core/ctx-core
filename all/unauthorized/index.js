import { assign } from '../assign/index.js'
import { HttpError } from '../http_error/index.js'
/** @typedef {import('../error_o/index.d.ts').argument__error_o_T} */
export const unauthorized__default__message = 'Unauthorized'
/**
 * @param {string}[message]
 * @param {argument__error_o_T}[error_o]
 * @returns {UnauthorizedError}
 * @private
 */
export function unauthorized_error_(
	message,
	error_o
) {
	return assign(
		new UnauthorizedError(message ?? unauthorized__default__message),
		error_o)
}
/**
 * Throws an unauthorized error (HTTP 401)
 * @param {string}[message]
 * @param {argument__error_o_T}[error_o]
 * @example
 * unauthorized_throw(ctx) // Unauthorized
 */
export function unauthorized__throw(
	message,
	error_o
) {
	throw unauthorized_error_(message, error_o)
}
/** @type {import('./index.d.ts').UnauthorizedError} */
export class UnauthorizedError extends HttpError {
	/**
	 * @param {string}[message]
	 */
	constructor(message) {
		super(message)
		this.name = 'UnauthorizedError'
		this.http__message = unauthorized__default__message
		if (!this.message) this.message = this.http__message
	}
}
