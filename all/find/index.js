/// <reference types="../wrap_a/index.d.ts" />
/**
 * Returns first item in `a` where `fn(a[idx], idx)` is truthy.
 * @param {wrap_a_T2}a
 * @param {(val:unknown, idx:number)=>unknown}fn
 * @returns {unknown}
 */
export function find(a, fn) {
	for (let idx = 0; idx < a.length; idx++) {
		const val = a[idx]
		const map_val = fn(val, idx)
		if (map_val) return val
	}
	return undefined
}
/**
 * @param maybe_a{wrap_a_T2}
 * @param fn{(val:unknown, idx:number)=>unknown}
 * @param or{unknown}
 * @returns {unknown}
 */
export function maybe_find(
	maybe_a,
	fn,
	or = null
) {
	if (!maybe_a) return or
	return find(maybe_a, fn)
}
/**
 * Returns function that returns value from [find](#find) with `fn` argument.
 * @param fn{(val:unknown, idx:number)=>unknown}
 * @returns {(a:unknown[])=>unknown}
 */
export function find_(fn) {
	return (a)=>find(a, fn)
}
export {
	find_ as find_fn,
	find_ as _find,
}
/**
 * @param fn{(val:unknown, idx:number)=>unknown}
 * @returns {(maybe_a:wrap_a_T2)=>unknown}
 */
export function maybe_find_(fn) {
	return (maybe_a)=>maybe_find(maybe_a, fn)
}
export {
	maybe_find_ as _maybe_find,
}
