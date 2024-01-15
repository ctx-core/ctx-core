import type { call_fn_T } from '../call/index.js'
export {
	bind_call_ as _bind_call,
	bind_call_ as _call__bind,
}
/**
 * Returns function bound to self that calls ...in_arg_a concat with ...fn_arg_a passed to function
 */
export declare function bind_call_<
	Self,
	A extends unknown[] = unknown[],
	in_A extends unknown[] = unknown[],
	Out = unknown
>(
	fn:call_fn_T<A, Out>,
	self:Self,
	...in_arg_a:bind_call__in_arg_a_T<A, in_A>
):(...arg_a:[...bind_call__out_arg_a_T<A, in_A>])=>Out
export declare type bind_call_T<
	A extends readonly unknown[] = readonly unknown[],
	O = unknown
> = (...fn_arg_a:A)=>O
export declare type bind_call_type = bind_call_T
export type bind_call__in_arg_a_T<
	A extends unknown[],
	in_A extends unknown[]
> =
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	A extends [...in_A, ...infer Right]
		? in_A
		: never
export type bind_call__out_arg_a_T<
	A extends unknown[],
	in_A extends unknown[]
> =
	A extends [...in_A, ...infer out_A]
		? out_A
		: never
