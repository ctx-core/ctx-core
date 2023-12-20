/// <reference types="../assign_fn_key_a/index.d.ts" />
/**
 * Assigns to an obj array of keys the return value of function in key_a_fn_aa.
 * @param {object}obj
 * @param {fn_key_a_tuple_T}key_a_fn_aa
 * @returns {object}
 */
export function assign_fn_key_a(
	obj,
	...key_a_fn_aa
) {
	for (let i = 0; i < key_a_fn_aa.length; i++) {
		const [key_a, fn] = key_a_fn_aa[i]
		for (let j = 0; j < key_a.length; j += 1) {
			const key = key_a[j]
			obj[key] = fn(obj[key], obj, key)
		}
	}
	return obj
}
export {
	assign_fn_key_a as assign_fn_key_a1,
	assign_fn_key_a as assign__key_a1__fn,
}
