import type { a_nowrap_T } from '../a_nowrap/index.js'
/**
 * Returns not applied to the spread of `in_value_a`
 */
export declare function not<
	I extends unknown = unknown
>(in_value_a:a_nowrap_T<I>):boolean
/**
 * Returns function that calls [not](#not) with [wrap_concat](#wrap_concat)  of the arguments.
 */
export declare function not_<
	I extends unknown = unknown
>(a_unwrap:a_nowrap_T<I>):not_T<I>
export declare type not_T<
	I extends unknown = unknown
> = (val_a:I[])=>boolean
export { not_ as _not, }
