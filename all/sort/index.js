/** @typedef {import('../array_types/index.d.ts').compare_T} */
/**
 * Sort items in `a` by the `compare` function
 * @param {unknown[]}a
 * @param {compare_T}compare
 * @returns {unknown[]}
 */
export function sort(a, compare) {
	return a.sort(compare)
}
/**
 * @param {unknown[]|undefined}maybe_a
 * @param {compare_T}compare
 * @param {unknown[]|null|unknown}or
 * @returns {unknown[]|null|unknown}
 */
export function maybe_sort(maybe_a, compare, or = null) {
	return maybe_a ? sort(maybe_a, compare) : or
}
/**
 * Returns a Function that calls [sort](#sort) with the given `compare` function.
 * @param {compare_T}compare
 * @returns {(a:unknown[])=>unknown[]}
 * @private
 */
export function sort_(compare) {
	return a=>sort(a, compare)
}
/**
 * @param {compare_T}compare
 * @param {unknown[]|null|undefined}or
 * @returns {(maybe_a:unknown[]|undefined)=>unknown[]|null|undefined}
 */
export function maybe_sort_(compare, or = null) {
	return maybe_a=>maybe_sort(maybe_a, compare, or)
}
export {
	sort_ as _sort,
	sort_ as _fn__sort,
	maybe_sort_ as _maybe_sort,
}
