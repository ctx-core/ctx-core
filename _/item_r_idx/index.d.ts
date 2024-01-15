/**
 * Returns an Object where each key is `_item(a[idx], idx)` and value is `idx`.
 */
export declare const item_r_idx_:idx_item_r_fn_T
export {
	item_r_idx_ as idx_item_r_,
	item_r_idx_ as idx_item_h_,
	item_r_idx_ as idx_item_hash_,
	item_r_idx_ as _idx_item_hash,
	item_r_idx_ as _hash__item__idx,
}
/**
 * Returns a function that returns value of `_idx_item_hash` with `item_` argument.
 */
export declare function item_r_idx__(
	item_:(in_value:string, idx:number)=>string
):idx_item_r_fn_T
export type idx_item_r_T = Record<string, number>
export declare type idx_item_r_fn_T = (a:string[]|undefined)=>idx_item_r_T
export {
	item_r_idx__ as item_r_idx_2,
	item_r_idx__ as idx_item_r_2,
	item_r_idx__ as idx_item_h_2,
	item_r_idx__ as idx_item_hash_2,
	item_r_idx__ as _idx_item_hash_fn,
	item_r_idx__ as _fn__idx_item_hash,
}
