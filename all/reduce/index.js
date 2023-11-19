/** @typedef {import('../reduce/index.d.ts').reduce_fn_T} */
/**
 * Returns reduced `memo` iterating over `a` with `fn(memo, a[], i, a)`.
 * @param {unknown[]}a
 * @param {reduce_fn_T}fn
 * @param {unknown}memo
 * @returns {unknown}
 */
export function reduce(a, fn, memo) {
	for (let i = 0; i < a.length; i++) {
		const o = a[i]
		memo = fn(memo, o, i, a)
	}
	return memo
}
/**
 * @param {unknown[]|undefined}maybe_a
 * @param {reduce_fn_T}fn
 * @param {unknown}memo
 * @param {unknown}or
 * @returns {unknown}
 */
export function maybe_reduce(
	maybe_a, fn, memo, or = null
) {
	if (!maybe_a) return or
	return reduce(maybe_a, fn, memo)
}
/**
 * Return Function that returns from `reduce` with `fn` and factory `memo_(a)`.
 * @param {reduce_fn_T}fn
 * @param {memo_fn_T}memo_
 * @returns {(a:unknown, memo:unknown)=>unknown}
 */
export function reduce_(fn, memo_) {
	return (a, memo)=>a.reduce(fn, memo == null ? memo_ && memo_(a) : memo)
}
/**
 * @param {reduce_fn_T}fn
 * @param {memo_fn_T}memo_fn
 * @param {unknown}or
 * @returns {(a:unknown[], memo:unknown)=>unknown}
 */
export function maybe_reduce_(fn, memo_fn, or = null) {
	return (a, memo)=>a ? a.reduce(fn, memo == null ? memo_fn && memo_fn(a) : memo) : or
}
export {
	reduce_ as _reduce,
	reduce_ as _fn__reduce,
	maybe_reduce_ as _maybe_reduce,
}
