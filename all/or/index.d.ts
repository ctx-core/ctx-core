import { a_nowrap_T } from '../a_nowrap/index.js'
import type { wrap_a_T } from '../wrap_a/index.js'
/**
 * Returns first truthy or last item in `a_unwrap`.
 */
export declare function or<Val>(
	a_unwrap:Val|wrap_a_T<Val>
):Val|undefined
/**
 * Returns first truthy or last item call or value in `a_unwrap`.
 */
export declare function or_<Val, Ret>(a_unwrap:a_nowrap_T<Val>):or_T<Val, Ret>
export interface or_fn_callable_T<I> {
	(...args:wrap_a_T<I>):I
}
export declare type or_T<Val, Ret> =
	(Val extends or_fn_callable_T<Val> ? Ret : Val)
	|undefined
/**
 * Returns function that returns first truthy or last item call or value in `a_unwrap`.
 */
export declare function or_fn_<Val, Ret>(
	a_unwrap:a_nowrap_T<Val>
):(val:Val)=>or_T<Val, Ret>
export declare type or_fn_T<Val, Ret> = (val:Val)=>or_T<Val, Ret>
export {
	or_ as on__fn,
	or_fn_ as _or__fn,
	or_fn_ as _fn__or__fn,
}
