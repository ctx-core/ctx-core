import { assign } from '../assign/index.js'
/** @typedef {import('../error_o/index.d.ts').argument__error_o_T} */
/** @typedef {import('../http_error/index.d.ts').HttpError}HttpError */
/**
 * @param {string}[message]
 * @param {argument__error_o_T}[error_o]
 * @returns {HttpError}
 */
export function http_error_(message, error_o) {
	return assign(
		new /** @type {any} */HttpError(message),
		error_o)
}
/**
 * HttpError
 * @param {string}[message]
 * @param {argument__error_o_T}error_o
 * @example
 * http_error__throw(ctx) // Unauthorized
 */
export function http_error__throw(message, error_o) {
	throw http_error_(message, error_o)
}
/** @type {import('./index.d.ts')} */
export class HttpError extends Error {
	/**
	 * @param {string}[message]
	 */
	constructor(message) {
		super(message)
		this.name = 'HttpError'
		this.http__message = message
		this.http__status = 500
	}
}
