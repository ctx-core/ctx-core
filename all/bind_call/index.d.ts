import type { call_fn_T } from '../call/index.js'
/**
 * Returns function bound to self that calls ...in_arg_a concat with ...fn_arg_a passed to function
 */
export declare function bind_call_<
	A1 extends unknown[] = unknown[],
	A2 extends unknown[] = unknown[],
	O2 extends unknown = unknown,
	S2 extends unknown = unknown
>(
	fn:call_fn_T<A2, O2>, self:S2, ...in_arg_a:A2[]
):ReturnType<call_fn_T<A2, O2>>
export {
	bind_call_ as _bind_call,
	bind_call_ as _call__bind,
}
export declare type bind_call_T<
	A extends readonly unknown[] = readonly unknown[],
	O extends unknown = unknown
> = (...fn_arg_a:A)=>O
export declare type bind_call_type = bind_call_T
