/**
 * Returns the index of the segment
 */
export function segment_point_index(value, point_a) {
	const { length } = point_a
	for (let i = 0; i < length; i++) {
		const begin_point = point_a[i]
		const end_point = point_a[i + 1]
		if (value >= begin_point && value <= end_point) return i
	}
	return -1
}
export { segment_point_index as index__point__segment }
