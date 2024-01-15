/// <reference types="../array_types/index.d.ts" />
/**
 * Returns Array of indices `idx` not rejected by `is_match_`.
 * @param {unknown[]}a
 * @param {is_match__T}is_match_
 * @returns {number[]}
 */
export function idx_reject(a, is_match_) {
	const out_a = []
	for (let idx = 0; idx < a.length; idx++) {
		const value = a[idx]
		if (is_match_(value, idx)) {
			out_a.push(idx)
		}
	}
	return out_a
}
/**
 * @param {unknown[]|undefined}maybe_a
 * @param {is_match__T}is_match_
 * @param {number[]|null|undefined}or
 * @returns {number[]|null|undefined}
 */
export function maybe_idx_reject(
	maybe_a,
	is_match_,
	or = null
) {
	if (!maybe_a) return or
	return idx_reject(maybe_a, is_match_)
}
export { idx_reject as reject__idx, }
/**
 * Returns function that returns the value from [idx_reject](#idx_reject) with `is_match_` argument.
 * @param {is_match__T}is_match_
 * @returns {(a:unknown[])=>number[]}
 */
export function idx_reject_(is_match_) {
	return a=>idx_reject(a, is_match_)
}
export {
	idx_reject_ as _idx_reject,
	idx_reject_ as _reject__idx,
	idx_reject_ as _fn__reject__idx,
}
