/**
 * Returns an Immediately-invoked function expression
 */
export declare function iife<T>(
	fn:(...fn_arg_a:unknown[])=>T,
	...arg_a:unknown[]):T
