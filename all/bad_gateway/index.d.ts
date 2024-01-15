import type { argument__error_o_T, error_o_error_T } from '../error_o/index.js'
import type { HttpError } from '../http_error/index.js'
export declare const bad_gateway__default__message:string
export declare function bad_gateway_error_(
	message?:string,
	error_o?:argument__error_o_T
):BadGatewayError
/**
 * Throws a bad_gateway error (HTTP 502)
 * @example
 * bad_gateway__throw('Unauthorized') // Bad Gateway
 */
export declare function bad_gateway__throw(
	message?:string,
	error_o?:argument__error_o_T
):void
export declare class BadGatewayError
	extends HttpError
	implements error_o_error_T {
}
