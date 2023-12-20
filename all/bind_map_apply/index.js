/// <reference types="../call/index.d.ts" />
import { bind_apply_ } from '../bind_apply/index.js'
/**
 * Returns function returning map of calls to fn_a bound to self that applies arg_a with ...arg_a_
 * @param {call_fn_T[]}fn_a
 * @param {unknown}self
 * @param {unknown}in_arg_a
 * @returns {(...fn_arg_a:unknown[])=>unknown[]}
 */
export function bind_map_apply_(fn_a, self, in_arg_a) {
	return (...fn_arg_a)=>
		fn_a.map(fn=>
			bind_apply_(fn, self, in_arg_a)(...fn_arg_a))
}
export {
	bind_map_apply_ as _bind_map_apply,
	bind_map_apply_ as bind_map_fn_apply_fn,
	bind_map_apply_ as _apply__map__bind
}
