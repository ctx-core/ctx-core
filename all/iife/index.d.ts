/**
 * Returns an Immediately-invoked function expression
 */
export declare function iife<
	T extends unknown = unknown
>(fn:(...fn_arg_a:any[])=>T, ...arg_a:unknown[]):T
