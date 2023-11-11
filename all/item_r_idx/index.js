import { I__ } from '../combinators/index.js'
/**
 * Returns an Object where each key is `_item(a[idx], idx)` and value is `idx`.
 * @type {import('../item_r_idx/index.js').idx_item_r_fn_T}
 */
export const item_r_idx_ = item_r_idx__(I__)
export {
	item_r_idx_ as idx_item_r_,
	item_r_idx_ as idx_item_h_,
	item_r_idx_ as idx_item_hash_,
	item_r_idx_ as _idx_item_hash,
	item_r_idx_ as _hash__item__idx,
}
/**
 * Returns a function that returns value of `_idx_item_hash` with `item_` argument.
 * @param {(in_value:string, idx:number)=>string}item_
 * @returns {import('./index.d.ts').idx_item_r_fn_T}
 */
export function item_r_idx__(item_) {
	return (in_a)=>{
		let idx_item_r = {}
		if (in_a) {
			const a = in_a
			for (let idx = 0; idx < a.length; idx++) {
				const item = item_ ? item_(a[idx], idx) : a[idx]
				idx_item_r[item] = idx
			}
		}
		return idx_item_r
	}
}
export {
	item_r_idx__ as idx_item_r_2,
	item_r_idx__ as idx_item_h_2,
	item_r_idx__ as idx_item_hash_2,
	item_r_idx__ as _idx_item_hash_fn,
	item_r_idx__ as _fn__idx_item_hash,
}
