export declare class Cancel<R = unknown> extends Error {
	constructor(config?:Cancel_config_T<R>)
	returns:R
}
export type Cancel_config_T<R = unknown> = {
	message?:string
	returns?:R
}
