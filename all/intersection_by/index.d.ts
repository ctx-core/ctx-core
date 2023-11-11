import type { wrap_aa_item_T } from '../wrap_aa_item/index.js'
export declare function intersection_by_<
	I extends unknown = unknown, O extends unknown = unknown
>(
	aa_nowrap:I, by_?:(v:wrap_aa_item_T<I>)=>O
):O[]
export {
	intersection_by_ as _intersection_by,
	intersection_by_ as _intersection__by,
}
