export declare class Cancel<R = unknown> extends Error {
	constructor(config?:Cancel_config_T<R>)
	returns:R
}
export declare function promise__cancel<P extends Promise<unknown>>(
	promise:P
):P
export declare function promise__cancel__throw(promise:Promise<unknown>):void
export type Cancel_config_T<R = unknown> = {
	message?:string
	returns?:R
}
