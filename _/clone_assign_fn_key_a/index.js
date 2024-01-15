/// <reference types="../assign_fn_key_a/index.d.ts" />
import { assign_fn_key_a } from '../assign_fn_key_a/index.js'
import { clone } from '../clone/index.js'
/**
 * Assigns to a cloned obj array of keys the return value of function in key_a_fn_aa.
 * @param {Record<string, object>}obj
 * @param {fn_key_a_tuple_T}key_a_fn_aa
 * @returns {Record<string, object>}
 */
export function clone_assign_fn_key_a(
	obj,
	...key_a_fn_aa
) {
	return assign_fn_key_a(clone(obj), ...key_a_fn_aa)
}
export {
	clone_assign_fn_key_a as clone_assign_fn_key_a1,
	clone_assign_fn_key_a as clone__assign__key_a1__fn,
}
