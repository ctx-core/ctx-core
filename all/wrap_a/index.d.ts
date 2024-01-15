import type { a_nowrap_T } from '../a_nowrap/index.js'
import type { wrap_aa_T } from '../wrap_aa/index.js'
/**
 * Returns `value` if array & `[value]` otherwise
 */
export declare function wrap_a_<I>(value:a_nowrap_T<I>):wrap_a_T<I>
export {
	wrap_a_ as wrap_a1_,
	wrap_a_ as wrap_a_fn,
	wrap_a_ as wrap_a1_fn,
	wrap_a_ as _wrap_a1,
	wrap_a_ as _a1__wrap,
}
export declare type wrap_a_T<I> =
	I extends readonly unknown[]
		? I
		: readonly I[]
export declare type wrap_a1_T<I> = wrap_a_T<I>
export declare type wrap_a1_type<I> = wrap_a_T<I>
export declare type wrap_a_T2<I> =
	|readonly I[]
	|readonly I[][]
	|wrap_a_T<I>
	|wrap_aa_T<I>
