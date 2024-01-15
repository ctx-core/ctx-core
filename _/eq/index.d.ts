import type { a_nowrap_T } from '../a_nowrap/index.js'
/**
 * Returns `==` operator to all values in `a_nowrap`.
 */
export declare function eq<I>(a_nowrap:a_nowrap_T<I>):boolean
export declare type eq_T<I> = (a_nowrap:I)=>boolean
/**
 * Returns function that returns `==` operator to all values in `in_value_aS`.
 */
export declare function eq_<I>(a_nowrap:a_nowrap_T<unknown>):eq_fn_T<I>
export {
	eq_ as _eq,
	eq_ as _fn__eq,
}
export declare type eq_fn_T<I> = (value:I)=>boolean
