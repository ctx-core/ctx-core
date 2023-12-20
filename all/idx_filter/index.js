/// <reference types="../a_item/index.d.ts" />
/// <reference types="../array_types/index.d.ts" />
import { I__ } from '../combinators/index.js'
/**
 * Returns Array of `idx` indices filtered by `fn`.
 * @param {unknown[]}in_a
 * @param {is_match__T<a_item_T<unknown>>}is_match_
 * @returns {number[]}
 */
export function idx_filter(in_a, is_match_ = I__) {
	const a = in_a
	const idx_a = []
	for (let idx = 0; idx < a.length; idx++) {
		const value = a[idx]
		if (is_match_(value, idx)) {
			idx_a.push(idx)
		}
	}
	return idx_a
}
/**
 * @param maybe_a{number[]|undefined}
 * @param is_match_{is_match__T<a_item_T<unknown>>}
 * @param or{number[]|null|undefined}
 * @returns {number[]|null|undefined}
 */
export function maybe_idx_filter(
	maybe_a,
	is_match_ = I__,
	or = null
) {
	if (!maybe_a) return or
	return idx_filter(maybe_a, is_match_)
}
/**
 * Returns function that returns value from [idx_filter](#idx_filter) with `fn` argument.
 * @param is_match_{is_match__T<number>}
 * @returns {(a:number[])=>number[]}
 */
export function idx_filter_(is_match_ = I__) {
	return (a)=>idx_filter(a, is_match_)
}
/**
 * @param is_match_{is_match__T<number>}
 * @returns {(a:number[]|undefined)=>number[]|undefined}
 * @private
 */
export function maybe_idx_filter_(is_match_ = I__) {
	return (a)=>maybe_idx_filter(a, is_match_)
}
export {
	idx_filter as filter__idx,
	idx_filter_ as _idx_filter,
	maybe_idx_filter_ as _maybe_idx_filter,
	idx_filter_ as _filter__idx,
	idx_filter_ as _fn__filter__idx,
}
