import type { argument__error_o_T, error_o_error_T, error_o_T } from '../error_o/index.js'
import type { HttpError } from '../http_error/index.js'
export declare const invalid_argument__default__message:string
export declare function invalid_argument_error_(
	message?:string,
	invalid_argument_error_o?:invalid_argument_error_o_T
):InvalidArgumentError
/**
 * Throws an invalid_argument error (HTTP 500)
 * @example
 * invalid_argument__throw('key: foobar')
 */
export declare function invalid_argument__throw(
	message?:string,
	invalid_argument_error_o?:invalid_argument_error_o_T
):void
export declare class InvalidArgumentError
	extends HttpError
	implements invalid_argument_error_o_error_T {
	key?:string
}
export interface invalid_argument_error_o_T extends error_o_T {
	key?:string
}
export interface argument__invalid_argument_error_o_T
	extends invalid_argument_error_o_T, argument__error_o_T {
}
export interface invalid_argument_error_o_error_T
	extends invalid_argument_error_o_T, error_o_error_T {
}
