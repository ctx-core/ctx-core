/**
 * Calls the fn with ...arg_a.
 */
export declare function call<
	A extends unknown[] = unknown[],
	O = unknown
>(fn:call_fn_T<A, O>, ...arg_a:A):O
/**
 * Returns function that calls ...in_arg_a concat with ...fn_arg_a passed to function
 */
export declare function call_<
	A_first extends unknown[] = unknown[],
	A_second extends unknown[] = unknown[],
	A extends unknown[] = [...A_first, ...A_second],
	Out = unknown
>(fn:call_fn_T<A, Out>, ...in_arg_a:A_first):call_fn_T<A_second, Out>
export { call_ as _call, }
export declare type call_fn_T<
	A extends readonly unknown[] = readonly unknown[],
	O = unknown
> = (...arg_a:A)=>O
export declare type call_fn_type = call_fn_T
