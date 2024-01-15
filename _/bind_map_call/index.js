/// <reference types="../call/index.d.ts" />
/**
 * Returns function bound to self that returns a map of fn_al calls with ...fac_arg_a concat with ...fn_arg_a passed
 * to function
 * @param {call_fn_T[]}fn_a
 * @param {unknown}self
 * @param {unknown}fac_arg_a
 * @returns {(...fn_arg_a:unknown[])=>unknown}
 */
export function bind_map_call_(fn_a, self, ...fac_arg_a) {
	return (...fn_arg_a)=>fn_a.map((fn)=>fn.call(self, ...[
		...fac_arg_a,
		...fn_arg_a
	]))
}
export {
	bind_map_call_ as _bind_map_call,
	bind_map_call_ as bind_map_fn_call_fn,
	bind_map_call_ as _call__map__bind,
}
