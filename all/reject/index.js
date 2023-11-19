/** @typedef {import('../array_types/index.d.ts').is_match__T} */
/**
 * Returns Array of items not rejected by `fn`.
 * @param {unknown[]}a
 * @param {is_match__T}is_match_
 * @returns {unknown}
 */
export function reject(a, is_match_) {
	return a.filter((value, idx)=>!is_match_(value, idx))
}
/**
 * @param {unknown[]|undefined}maybe_a
 * @param {is_match__T}is_match_
 * @param {unknown}or
 * @returns {unknown}
 */
export function maybe_reject(maybe_a, is_match_, or = null) {
	return maybe_a ? maybe_a.filter((value, idx)=>!is_match_(value, idx)) : or
}
/**
 * Returns function that returns value from [reject](#reject) with `fn` argument.
 * @param {is_match__T}is_match_
 * @returns {(a:unknown[])=>unknown}
 */
export function reject_(is_match_) {
	return a=>reject(a, is_match_)
}
/**
 * @param {is_match__T}is_match_
 * @param {unknown}or
 * @returns {(a:unknown[]|undefined)=>unknown}
 */
export function maybe_reject_(is_match_, or = null) {
	return a=>maybe_reject(a, is_match_, or)
}
export {
	reject_ as _reject,
	reject_ as _fn__reject,
	maybe_reject_ as _maybe_reject,
}
