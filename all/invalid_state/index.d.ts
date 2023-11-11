import type { argument__error_o_T, error_o_error_T, error_o_T } from '../error_o/index.js'
import type { HttpError } from '../http_error/index.js'
export declare const invalid_state__default__message:string
export declare function invalid_state_error_(
	message?:string,
	invalid_state_error_o?:argument__invalid_state_error_o_T
):InvalidStateError
/**
 * Throws an invalid_state error (HTTP 500)
 * @example
 * invalid_state__throw('foobar: invalid type')
 */
export declare function invalid_state__throw(
	message?:string,
	invalid_state_error_o?:argument__invalid_state_error_o_T
):void
export declare class InvalidStateError
	extends HttpError
	implements invalid_state_error_o_error_T {
	key?:string
	reason?:string
}
export interface invalid_state_error_o_T extends error_o_T {
	key?:string
	reason?:string
}
export interface argument__invalid_state_error_o_T
	extends invalid_state_error_o_T, argument__error_o_T {
}
export interface invalid_state_error_o_error_T
	extends invalid_state_error_o_T, error_o_error_T {
}
