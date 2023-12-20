/// <reference types="../each/index.d.ts" />
/** @typedef {each_fn_T} */
/**
 * Iterate over each item in `a` with `fn(a[i], i)`.
 * @param {unknown[]}a
 * @param {each_fn_T}fn
 * @returns {unknown[]}
 */
export function each(a, fn) {
	for (let i = 0; i < a.length; i++) {
		fn(a[i], i)
	}
	return a
}
/**
 * @param {unknown[]|undefined}maybe_a
 * @param {each_fn_T}fn
 * @param {unknown[]|null|undefined}[or]
 * @returns {unknown[]|null|undefined}
 */
export function maybe_each(maybe_a, fn, or = null) {
	if (!maybe_a) return or
	return each(maybe_a, fn)
}
