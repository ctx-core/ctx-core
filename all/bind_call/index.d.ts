import type { call_fn_T } from '../call/index.js'
export {
	bind_call_ as _bind_call,
	bind_call_ as _call__bind,
}
/**
 * Returns function bound to self that calls ...in_arg_a concat with ...fn_arg_a passed to function
 */
export declare function bind_call_<
	A extends unknown[] = unknown[],
	O = unknown,
	S = unknown
>(
	fn:call_fn_T<A, O>, self:S, ...in_arg_a:A[]
):ReturnType<call_fn_T<A, O>>
export declare type bind_call_T<
	A extends readonly unknown[] = readonly unknown[],
	O = unknown
> = (...fn_arg_a:A)=>O
export declare type bind_call_type = bind_call_T
