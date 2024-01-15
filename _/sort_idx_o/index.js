/// <reference types="../index.d.ts" />
import { compare_ } from '../compare/index.js'
import { sort } from '../sort/index.js'
/**
 * Returns a [sort_idx_o_T](#sort_idx_o_T).
 * @param {unknown[]|undefined}maybe_a
 * @param {compare_T}[compare]
 * @returns {sort_idx_o_T}
 */
export function sort_idx_o_(
	maybe_a,
	compare = compare_()
) {
	const sort_a = []
	const sort_val_a = []
	const sort_idx_a = []
	if (maybe_a) {
		const a = maybe_a
		for (let i = 0; i < a.length; i++) {
			sort_a.push([
				a[i],
				i
			])
		}
		sort(sort_a, (l, r)=>compare(l[0], r[0]))
		for (let i1 = 0; i1 < a.length; i1++) {
			sort_idx_a.push(sort_a[i1][1])
			sort_val_a[i1] = sort_a[i1][0]
		}
	}
	return {
		sort_idx_a,
		sort_val_a
	}
}
export {
	sort_idx_o_ as sort_idx_ctx_,
	sort_idx_o_ as _sort_idx_ctx,
	sort_idx_o_ as _ctx__idx__sort,
}
/**
 * Returns function that returns [_sort_idx_ctx](#_sort_idx_ctx).
 * @param {compare_T}compare
 * @returns {sort_idx_ctx__T}
 */
export function sort_idx_o__(compare) {
	return a=>sort_idx_o_(a, compare)
}
export {
	sort_idx_o__ as sort_idx_ctx__,
	sort_idx_o__ as sort_idx_ctx_2,
	sort_idx_o__ as _sort_idx_ctx_fn,
	sort_idx_o_ as _fn__sort_idx_ctx,
}
