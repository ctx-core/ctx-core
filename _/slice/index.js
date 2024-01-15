/**
 * Calls slice on a
 * @param {unknown[]}a
 * @param {number}[begin_idx]
 * @param {number}[end_idx]
 * @returns {unknown}
 */
export function slice(a, begin_idx, end_idx) {
	return a.slice(begin_idx, end_idx)
}
/**
 * @param {unknown[]|undefined}maybe_a
 * @param {number}[begin_idx]
 * @param {number}[end_idx]
 * @param {unknown[]|null|undefined}[or]
 * @returns {unknown[]|null|undefined}
 */
export function maybe_slice(
	maybe_a,
	begin_idx = undefined,
	end_idx = undefined,
	or = null
) {
	return maybe_a ? slice(maybe_a, begin_idx, end_idx) : or
}
/**
 * Returns a `slice` function with the given `...arg_a` that takes a Array `a` as it's argument.
 * @param {number}begin_idx
 * @param {number}end_idx
 * @returns {(a:unknown[])=>unknown[]}
 */
export function slice_(begin_idx, end_idx) {
	return a=>slice(a, begin_idx, end_idx)
}
/**
 * @param {number}begin_idx
 * @param {number}end_idx
 * @param {unknown[]|null|unknown}or
 * @returns {(maybe_a:unknown[]|undefined)=>unknown[]|null|unknown}
 */
export function maybe_slice_(begin_idx, end_idx, or = null) {
	return maybe_a=>maybe_slice(maybe_a, begin_idx, end_idx, or)
}
export {
	slice_ as _slice,
	slice_ as _fn__slice,
	maybe_slice_ as _maybe_slice,
}
