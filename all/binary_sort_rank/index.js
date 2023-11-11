/**
 * Returns the rank of the item where the compare function === 0, using binarySort
 * @param {unknown[]}a
 * @param {import('../array_types/index.js').compare_1_T}compare_1
 * @returns {number}
 */
export function binary_sort_rank(a, compare_1) {
	let min_index = 0
	let max_index = a.length - 1
	let current_index
	let current_element
	while (min_index <= max_index) {
		current_index = (min_index + max_index) / 2 | 0
		current_element = a[current_index]
		const sort_compare = compare_1(current_element, current_index)
		if (sort_compare > 0) {
			min_index = current_index + 1
		} else if (sort_compare < 0) {
			max_index = current_index - 1
		} else {
			return current_index
		}
	}
	return -1
}
export {
	binary_sort_rank as binarySort_rank,
	binary_sort_rank as rank__binarySort,
	binary_sort_rank as rank__binarySort__a1,
}
