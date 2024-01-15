import type { compare_1_T } from '../array_types/index.js'
/**
 * Returns the rank of the item where the compare function === 0, using binarySort
 */
export declare function binary_sort_rank<I>(
	a:readonly I[],
	compare_1:compare_1_T<I>
):number
export {
	binary_sort_rank as binarySort_rank,
	binary_sort_rank as rank__binarySort,
	binary_sort_rank as rank__binarySort__a1,
}
