import type { a_nowrap_T } from '../a_nowrap/index.js'
/**
 * Returns `==` operator to all values in `a_nowrap`.
 */
export declare function eq<In>(a_nowrap:a_nowrap_T<In>):boolean
export declare type eq_T<I> = (a_nowrap:I)=>boolean
/**
 * Returns function that returns `==` operator to all values in `in_value_aS`.
 */
export declare function eq_<In>(a_nowrap:a_nowrap_T<In>):eq_fn_T<In>
export {
	eq_ as _eq,
	eq_ as _fn__eq,
}
export declare type eq_fn_T<In> = (value:In)=>boolean
