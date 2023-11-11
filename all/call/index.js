/** @typedef {import('../call/index.d.ts').call_fn_T} */
/**
 * Calls the fn with ...arg_a.
 * @param {call_fn_T}fn
 * @param {unknown}arg_a
 * @returns {unknown}
 */
export function call(fn, ...arg_a) {
	return fn(...arg_a)
}
/**
 * Returns function that calls ...in_arg_a concat with ...fn_arg_a passed to function
 * @param {call_fn_T}fn
 * @param {unknown}in_arg_a
 * @returns {(fn:call_fn_T, ...in_arg_a:unknown[])=>call_fn_T}
 */
export function call_(fn, ...in_arg_a) {
	return (...fn_arg_a)=>call(fn, ...[
		...in_arg_a,
		...fn_arg_a
	])
}
export { call_ as _call, }
