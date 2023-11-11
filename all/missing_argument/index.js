import { assign } from '../assign/index.js'
import { HttpError } from '../http_error/index.js'
/** @typedef {import('../missing_argument/index.d.ts').argument__missing_argument_error_o_T}argument__missing_argument_error_o_T */
/** @typedef {import('../missing_argument/index.d.ts').MissingArgumentError} */
export const missing_argument__default__message = 'Error'
/**
 * @param {string}[message]
 * @param {argument__missing_argument_error_o_T}[missing_argument_error_o]
 * @returns {MissingArgumentError}
 * @private
 */
export function missing_argument_error_(
	message,
	missing_argument_error_o
) {
	return assign(
		new MissingArgumentError(message ?? missing_argument__default__message),
		missing_argument_error_o)
}
/**
 * Throws a missing_argument error (HTTP 500)
 * @param {string}[message]
 * @param {argument__missing_argument_error_o_T}[missing_argument_error_o]
 * @example
 * missing_argument__throw('foobar: not defined', { key: 'foobar' })
 */
export function missing_argument__throw(
	message,
	missing_argument_error_o
) {
	throw missing_argument_error_(message, missing_argument_error_o)
}
export class MissingArgumentError extends HttpError {
	/**
	 * @param {string}[message]
	 */
	constructor(message) {
		super(message)
		this.name = 'MissingArgumentError'
		this.http__message = missing_argument__default__message
		this.http__status = 500
		if (!this.message) this.message = this.http__message
	}
}
