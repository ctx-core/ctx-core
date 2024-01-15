/// <reference types="../bind_call/index.d.ts" />
/// <reference types="../call/index.d.ts" />
/** @typedef {call_fn_T} */
/**
 * Returns function that applies in_arg_a with ...fn_arg_a
 * @param {call_fn_T}fn
 * @param {unknown[]}[in_arg_a]
 * @returns {bind_call_T}
 */
export function apply_(fn, in_arg_a = []) {
	return (...fn_arg_a)=>fn(...[
		...in_arg_a,
		...fn_arg_a
	])
}
export { apply_ as _apply, }
