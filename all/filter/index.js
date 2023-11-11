/** @typedef {import('../array_types/index.d.ts').is_match__T}is_match__T */
/**
 * Returns Array where items in `a` are filtered by `fn`.
 * @param {unknown[]}a
 * @param {is_match__T}is_match_fn
 * @returns {unknown[]}
 */
export function filter(a, is_match_fn) {
	const out_a = []
	for (let i = 0; i < a.length; i++) {
		const value = a[i]
		if (is_match_fn(value, i)) {
			out_a.push(value)
		}
	}
	return out_a
}
export {
	filter_ as _filter,
	filter_ as _fn__filter,
}
/**
 * @param maybe_a{unknown[]|undefined}
 * @param is_match_fn{is_match__T}
 * @param or{unknown[]|null|undefined}
 * @returns {unknown[]|null|undefined}
 */
export function maybe_filter(
	maybe_a,
	is_match_fn,
	or = null
) {
	if (!maybe_a) return or
	return filter(maybe_a, is_match_fn)
}
/**
 * Returns function that returns value from [filter](#filter) with `fn` argument.
 */
/**
 * @param is_match_fn{is_match__T}
 * @returns {(a:unknown[])=>unknown[]}
 */
export function filter_(is_match_fn) {
	return (a)=>filter(a, is_match_fn)
}
/**
 * @param is_match_fn{is_match__T}
 * @returns {(maybe_a:unknown[]|undefined)=>unknown[]}
 */
export function maybe_filter_(is_match_fn) {
	return (maybe_a)=>filter(maybe_a, is_match_fn)
}
export {
	maybe_filter_ as _maybe_filter,
}
