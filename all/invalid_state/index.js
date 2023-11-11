import { assign } from '../assign/index.js'
import { HttpError } from '../http_error/index.js'
/** @typedef {import('../invalid_state/index.d.ts').argument__invalid_state_error_o_T}argument__invalid_state_error_o_T */
/** @typedef {import('./index.d.ts').InvalidStateError} */
export const invalid_state__default__message = 'Error'
/**
 * @param {string}[message]
 * @param {argument__invalid_state_error_o_T}[invalid_state_error_o]
 * @return {InvalidStateError}
 * @private
 */
export function invalid_state_error_(
	message,
	invalid_state_error_o
) {
	return assign(
		new InvalidStateError(message ?? invalid_state__default__message),
		invalid_state_error_o)
}
/**
 * Throws an invalid_state error (HTTP 500)
 * @param {string}[message]
 * @param {argument__invalid_state_error_o_T}[invalid_state_error_o]
 * @example
 * invalid_state__throw('foobar: invalid type')
 */
export function invalid_state__throw(
	message,
	invalid_state_error_o
) {
	throw invalid_state_error_(message, invalid_state_error_o)
}
export class InvalidStateError extends HttpError {
	/**
	 * @param {string}[message]
	 */
	constructor(message) {
		super(message)
		this.name = 'InvalidStateError'
		this.http__status = 500
		this.http__message = invalid_state__default__message
		if (!this.message) this.message = this.http__message
	}
}
