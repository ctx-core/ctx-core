/**
 * Returns the first item in `a`.
 * @param {unknown[]}a
 * @returns {unknown}
 */
export function first_(a) {
	return a[0]
}
/**
 * @param maybe_a{unknown[]|undefined}
 * @param or{unknown[]|null|undefined}
 * @returns {unknown[]|null|undefined}
 */
export function maybe_first_(
	maybe_a,
	or = null
) {
	return maybe_a ? first_(maybe_a) : or
}
export {
	first_ as _first,
	maybe_first_ as _maybe_first,
}
