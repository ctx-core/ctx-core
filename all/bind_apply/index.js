/** @typedef {import('../call/index.d.ts').call_fn_T} */
/**
 * Returns function bound to self that applies arg_a with ...arg_a_
 * @param {call_fn_T}fn
 * @param {unknown}self
 * @param {unknown}[in_arg_a]
 * @returns {(fn:call_fn_T, unknown, in_arg_a?:unknown[])=>ReturnType<call_fn_T>}
 */
export function bind_apply_(fn, self, in_arg_a) {
	return (find, self, in_arg_a)=>fn.apply(self, [
		...in_arg_a,
		...fn_arg_a
	])
}
export {
	bind_apply_ as _bind_apply,
	bind_apply_ as _apply__bind,
}
