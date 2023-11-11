export declare function chain_<
	O extends unknown = unknown
>(
	chain__o:chain__o_T,
	...key_a:chain_key__T[]
):O
export interface chain__o_T extends Record<string, any> {
}
export declare type chain__ctx_I = chain__o_T
export type chain_key__fn_T = (this:any, head:any)=>string
export type chain_key__T = string|string[]|number|chain_key__fn_T
export { chain_ as _chain, }
export declare function chain__<
	O extends unknown = unknown
>(
	obj:object,
	or:O
):(...keys:chain_key__T[])=>O
export {
	chain__ as chain_2,
	chain__ as __chain,
}
