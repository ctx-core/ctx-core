/// <reference types="../error_o/index.d.ts" />
/// <reference types="./index.d.ts" />
import { assign } from '../assign/index.js'
/** @typedef {argument__error_o_T} */
/** @typedef {error_o_error_T} */
/**
 * argument__error_o_T factory function
 * @param {string}[message]
 * @param {argument__error_o_T}[error_o]
 * @returns {error_o_error_T}
 */
export function error_o_(message, error_o) {
	const error = new Error(message)
	return assign(error, error_o)
}
/**
 * Throws an error_o
 * @param {string}[message]
 * @param {argument__error_o_T}[error_o]
 * @throws Decorate & throw error given by the arguments.
 */
export function error_o__throw(message, error_o) {
	throw error_o_(message, error_o)
}
export {
	error_o__throw as error__throw,
}
