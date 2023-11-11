import type { wrap_aa_T } from '../wrap_aa/index.js'
/**
 * Returns a `set` with the union of the members
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export declare function union_set_<
	I extends unknown = unknown
>(
	member_a_nowrap_a_nowrap:Set<I>|wrap_aa_T<I>
):Set<I>
export {
	union_set_ as set_union_fn,
	union_set_ as _union__set,
}
