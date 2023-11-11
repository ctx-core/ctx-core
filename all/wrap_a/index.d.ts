import type { a_nowrap_T } from '../a_nowrap/index.js'
import type { wrap_aa_T } from '../wrap_aa/index.js'
/**
 * Returns `value` if array & `[value]` otherwise
 */
export declare function wrap_a_<
	I extends unknown = unknown
>(
	value:a_nowrap_T<I>
):wrap_a_T<I>
export {
	wrap_a_ as wrap_a1_,
	wrap_a_ as wrap_a_fn,
	wrap_a_ as wrap_a1_fn,
	wrap_a_ as _wrap_a1,
	wrap_a_ as _a1__wrap,
}
export declare type wrap_a_T<
	I extends unknown = unknown
> =
	I extends readonly unknown[]
		? I
		: readonly I[]
export declare type wrap_a1_T = wrap_a_T
export declare type wrap_a1_type = wrap_a_T
export declare type wrap_a_T2<
	I extends unknown = unknown
> =
	readonly I[]
	|readonly I[][]
	|wrap_a_T<I>
	|wrap_aa_T<I>
