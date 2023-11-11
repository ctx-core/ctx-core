import type { argument__error_o_T, error_o_error_T, error_o_T } from '../error_o/index.js'
import type { HttpError } from '../http_error/index.js'
export declare const bad_credentials__default__message:string
export declare function bad_credentials_error_(
	message?:string,
	bad_credentials_error_o?:argument__bad_credentials_error_o_T
):BadCredentialsError
/**
 * Throws a Bad Credentials error (HTTP 401)
 * @example
 * bad_credentials__throw(ctx) // Unauthorized
 */
export declare function bad_credentials__throw(
	message?:string,
	bad_credentials_error_o?:argument__bad_credentials_error_o_T
):void
export declare class BadCredentialsError
	extends HttpError
	implements bad_credentials_error_o_error_T {
	jwt_token?:string
}
export interface bad_credentials_error_o_T extends error_o_T {
	jwt_token?:string
}
export interface argument__bad_credentials_error_o_T
	extends bad_credentials_error_o_T, argument__error_o_T {
}
export interface bad_credentials_error_o_error_T
	extends error_o_error_T, bad_credentials_error_o_T {
}
