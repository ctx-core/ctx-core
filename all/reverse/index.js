/**
 * Reverses the order of items in `in_a` by mutating `in_a`.
 * @param {unknown[]}in_a
 * @returns {unknown[]}
 */
export function reverse(in_a) {
	return in_a.reverse()
}
/**
 * @param {unknown[]|undefined}maybe_a
 * @param {unknown[]|null|undefined}or
 * @returns {unknown[]|null|undefined}
 */
export function maybe_reverse(maybe_a, or = null) {
	return maybe_a ? reverse(maybe_a) : or
}
