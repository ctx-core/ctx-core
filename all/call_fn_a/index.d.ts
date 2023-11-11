/**
 * Calls functions in fn_a with ...arg_a
 */
export declare function call_fn_a<
	RVal extends unknown = unknown
>(fn_a:((...arg_a:unknown[])=>RVal)[], ...arg_a:unknown[]):RVal[]
export { call_fn_a as call__a1__fn, }
