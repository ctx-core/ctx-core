import type { argument__error_o_T, error_o_error_T } from '../error_o/index.js'
import type { HttpError } from '../http_error/index.js'
export declare const bad_request__default__message:string
export declare function bad_request_error_(
	message?:string,
	error_o?:argument__error_o_T
):BadRequestError
/**
 * Throws a bad_request error (HTTP 400)
 * @example
 * bad_request__throw('Bad Request') // Bad Request
 */
export declare function bad_request__throw(
	message?:string,
	error_o?:argument__error_o_T
):void
export declare class BadRequestError
	extends HttpError
	implements error_o_error_T {
}
