import type { call_fn_T } from '../call/index.js'
/**
 * Returns function returning map of calls to fn_a bound to self that applies arg_a with ...arg_a_
 */
export declare function bind_map_apply_<
	A1 extends unknown[] = unknown[],
	O1 = unknown,
	S1 = unknown,
	A2 extends unknown[] = unknown[]
>(
	fn_a:call_fn_T<A1, O1>[], self:S1, in_arg_a:A2
):(...fn_arg_a:A1)=>O1[]
export {
	bind_map_apply_ as _bind_map_apply,
	bind_map_apply_ as bind_map_fn_apply_fn,
	bind_map_apply_ as _apply__map__bind
}
