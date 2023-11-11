/**
 * Assigns & coerces to ctx.ctx__error
 */
export declare function error_o_(
	message?:string,
	error_o?:argument__error_o_T
):argument__error_o_T
/**
 * Throws an error
 * @throws Decorate & throw error given by the arguments.
 */
export declare function error_o__throw(
	message?:string,
	error_o?:argument__error_o_T
):void
export {
	error_o__throw as error__throw,
}
export interface error_o_T {
	data?:any
	http__message?:string
	http__status?:number
	url?:string
}
export type argument__error_o_T = error_o_T&Partial<Error>
export interface error_o_error_T extends Error, error_o_T {
}
