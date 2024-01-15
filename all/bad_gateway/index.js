/// <reference types="../error_o/index.d.ts" />
import { assign } from '../assign/index.js'
import { HttpError } from '../http_error/index.js'
/** @typedef {argument__error_o_T} */
export const bad_gateway__default__message = 'Bad Gateway'
/**
 * @param {string}[message]
 * @param {argument__error_o_T}[error_o]
 * @returns {BadGatewayError}
 * @private
 */
export function bad_gateway_error_(
	message,
	error_o
) {
	return assign(
		new /** @type {any} */BadGatewayError(
			message ?? bad_gateway__default__message),
		error_o)
}
/**
 * Throws a bad_gateway error (HTTP 502)
 * @param {string}[message]
 * @param {argument__error_o_T}[error_o]
 * @example
 * bad_gateway__throw(ctx) // Bad Gateway
 */
export function bad_gateway__throw(
	message,
	error_o
) {
	throw bad_gateway_error_(message, error_o)
}
/** @type {import('./index.d.ts').BadGatewayError} */
export class BadGatewayError extends HttpError {
	/**
	 * @param {string}[message]
	 */
	constructor(message) {
		super(message)
		this.name = 'BadGatewayError'
		this.http__status = 502
		this.http__message = bad_gateway__default__message
		if (!this.message) this.message = this.http__message
	}
}
