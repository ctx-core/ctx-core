import type { call_fn_T } from '../call/index.js'
/**
 * Returns function bound to self that applies arg_a with ...arg_a_
 */
export declare function bind_apply_<
	Self,
	A extends unknown[] = unknown[],
	in_A extends unknown[] = unknown[],
	O = unknown
>(
	fn:call_fn_T<A, O>,
	self:Self,
	in_arg_a?:bind_apply__in_arg_a_T<A, in_A>
):(...arg_a:bind_apply__out_arg_a_T<A, in_A>)=>O
export {
	bind_apply_ as _bind_apply,
	bind_apply_ as _apply__bind,
}
export type bind_apply__in_arg_a_T<
	A extends unknown[],
	in_A extends unknown[]
> =
// eslint-disable-next-line @typescript-eslint/no-unused-vars
	A extends [...in_A, ...infer out_a]
		? in_A
		: never
export type bind_apply__out_arg_a_T<
	A extends unknown[],
	in_A extends unknown[]
> =
	A extends [...in_A, ...infer out_A]
		? [...in_A, ...out_A] extends A
			? out_A
			: in_A extends unknown[]
			? A
			: never
		: never
