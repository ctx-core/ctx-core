import type { fn_key_a_tuple_T } from '../assign_fn_key_a/index.js'
/**
 * Assigns to a cloned obj array of keys the return value of function in key_a_fn_aa.
 */
export declare function clone_assign_fn_key_a<
	I extends object = object
>(
	obj:Record<string, I>,
	...key_a_fn_aa:fn_key_a_tuple_T<I>[]
):Record<string, I>
export {
	clone_assign_fn_key_a as clone_assign_fn_key_a1,
	clone_assign_fn_key_a as clone__assign__key_a1__fn,
}
