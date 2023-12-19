import type { a_nowrap_T } from '../a_nowrap/index.js'
/**
 * Returns `wrap_aa_T` wrapped as a 2-dimensional array
 */
export declare function wrap_aa_<I>(a_nowrap:a_nowrap_T<I>):wrap_aa_T<I>
export {
	wrap_aa_ as wrap_a2_,
	wrap_aa_ as _wrap_a2,
	wrap_aa_ as _a2__wrap,
}
export declare type wrap_aa_T<I> = (
	I extends readonly unknown[][]
		? I
		: I extends readonly unknown[]
			? readonly I[]
			: readonly I[][])
export declare type wrap_aa_type = wrap_aa_T
