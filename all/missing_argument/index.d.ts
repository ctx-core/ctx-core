import type { argument__error_o_T, error_o_error_T, error_o_T } from '../error_o/index.js'
import type { HttpError } from '../http_error/index.js'
export declare const missing_argument__default__message:string
export declare function missing_argument_error_(
	message?:string,
	error_o?:missing_argument_error_o_T
):MissingArgumentError
/**
 * Throws a missing_argument error (HTTP 500)
 * @example
 * missing_argument__throw('foobar: not defined', { key: 'foobar' })
 */
export declare function missing_argument__throw(
	message?:string,
	missing_argument_error_o?:missing_argument_error_o_T
):void
export declare class MissingArgumentError
	extends HttpError
	implements missing_argument_error_o_error_T {
	key?:string
}
export interface missing_argument_error_o_T extends error_o_T {
	key?:string
	type?:string
}
export interface argument__missing_argument_error_o_T
	extends missing_argument_error_o_T, argument__error_o_T {
}
export interface missing_argument_error_o_error_T
	extends error_o_error_T, missing_argument_error_o_T {
}
