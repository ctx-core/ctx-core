/**
 * Calls splice on a
 * @param {unknown[]}a
 * @param {number}start
 * @param {number}[delete_count]
 * @param {unknown}arg_a
 * @returns {unknown[]}
 */
export function splice(a, start, delete_count, ...arg_a) {
	return a.splice(start, delete_count, ...arg_a)
}
/**
 * @param {unknown[]|undefined}maybe_a
 * @param {number}start
 * @param {number}[delete_count]
 * @param {unknown}arg_a
 * @returns {unknown[]|undefined}
 */
export function maybe_splice(
	maybe_a, start, delete_count, ...arg_a
) {
	return maybe_a ? splice(maybe_a, start, delete_count, ...arg_a) : undefined
}
