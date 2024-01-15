import type { assign_fn_T } from '../call_assign/index.js'
/**
 * Assigns to obj array of keys the return value of function in key_a_fn_aa.
 */
export declare function assign_fn_key_a<I>(
	obj:Record<string, I>,
	...key_a_fn_aa:fn_key_a_tuple_T<I>[]
):Record<string, I>
export declare type fn_key_a_tuple_T<I> = [string[], assign_fn_T<I>]
export {
	assign_fn_key_a as assign_fn_key_a1,
	assign_fn_key_a as assign__key_a1__fn,
}
