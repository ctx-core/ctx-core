import type { compare_T } from '../array_types/index.js'
/**
 * Returns a basic ascending or descending `compare` function to be used for sorting.
 */
export declare function compare_<
	I extends unknown = unknown
>(asc?:boolean):compare_T<I>
/**
 * Compare function to sort by ascending order.
 */
export declare const asc_compare:compare_T<unknown>
/**
 * Compare function to sort by descending order.
 */
export declare const desc_compare:compare_T<unknown>
export {
	compare_ as _compare,
	compare_ as _fn__compare,
	asc_compare as compare__asc,
	asc_compare as fn__compare__asc,
	desc_compare as compare__desc,
	desc_compare as fn__compare__desc,
}
