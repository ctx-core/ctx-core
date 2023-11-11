import type { a_nowrap_T } from '../a_nowrap/index.js'
import type { wrap_aa_T } from '../wrap_aa/index.js'
/**
 * Returns the intersection of n arrays
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export declare function intersection_a_<
	I extends unknown = unknown
>(aa_nowrap:a_nowrap_T<I>):intersection_a_T<I>
export declare type intersection_a_T<
	I extends unknown = unknown
> = wrap_aa_T<I> extends readonly (infer O)[][] ? readonly O[] : never
export {
	intersection_a_ as _intersection__a1,
}
