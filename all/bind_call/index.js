/** @typedef {import('../call_fn/index.js')} */
/**
 * Returns function bound to self that calls ...in_arg_a concat with ...fn_arg_a passed to function
 * @param {call_fn_T}fn
 * @param {unknown}self
 * @param {unknown}in_arg_a
 * @returns {(fn:call_fn_T, self:unknown, ...in_arg_a:unknown[])=>ReturnType<call_fn_T>}
 */
export function bind_call_(fn, self, ...in_arg_a) {
	return (...fn_arg_a)=>fn.call(self, ...[
		...in_arg_a,
		...fn_arg_a
	])
}
export {
	bind_call_ as _bind_call,
	bind_call_ as _call__bind,
}
