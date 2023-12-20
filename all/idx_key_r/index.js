/// <reference types="../array_types/index.d.ts" />
/// <reference types="../idx_key_r/index.d.ts" />
/// <reference types="./index.d.ts" />
import { I__ } from '../combinators/index.js'
/**
 * Returns a Hash where each key is `a[idx][key]` & value is `idx`.
 * @param {unknown[]}a
 * @param {string|number}key
 * @param {item_key_idx_val_fn_T<string, Record<string, string>>}item_key_idx_val_
 * @returns {idx_key_r_T}
 */
export function idx_key_r_(a, key, item_key_idx_val_ = I__) {
	let idx_key_r = {}
	if (a) {
		for (let idx = 0; idx < a.length; idx++) {
			const obj = a[idx]
			const val =
				item_key_idx_val_
					? item_key_idx_val_(obj && obj[key], obj, key, idx)
					: obj && obj[key]
			if (!val) continue
			idx_key_r[val] = idx
		}
	}
	return idx_key_r
}
/**
 * @param {unknown[]|undefined}maybe_a
 * @param {string|number}key
 * @param {item_key_idx_val_fn_T<string, Record<string, string>>}item_key_idx_val_
 * @param {idx_key_r_T|null|undefined}or
 * @returns {idx_key_r_T|null|undefined}
 */
export function maybe_idx_key_r_(
	maybe_a,
	key,
	item_key_idx_val_ = I__,
	or = null
) {
	return maybe_a ? idx_key_r_(maybe_a, key, item_key_idx_val_) : or
}
export {
	idx_key_r_ as idx_key_h_,
	idx_key_r_ as _idx_key_hash,
	idx_key_r_ as _hash__key__idx,
	maybe_idx_key_r_ as maybe_idx_key_h_,
	maybe_idx_key_r_ as _maybe_idx_key_hash,
}
/** @typedef {idx_key_r_T} */
/** @typedef {item_key_idx_val_fn_T} */
/**
 * Returns function that returns from [_idx_key_hash](#_idx_key_hash) with `item_key_idx_val_` function argument.
 * @param {item_key_idx_val_fn_T<string, Record<string, string>>}item_key_idx_val_
 * @returns {(a:Record<string, string>[], key:string|number)=>idx_key_r_T}
 */
export function idx_key_r__(
	item_key_idx_val_ = I__
) {
	return (a, key)=>idx_key_r_(a, key, item_key_idx_val_)
}
/**
 * @param {item_key_idx_val_fn_T<string, Record<string, string>>}item_key_idx_val_
 * @param {idx_key_r_T|null|unknown}or
 * @returns {(maybe_a:Record<string, string>[]|undefined, key:string)=>idx_key_r_T|null|unknown}
 */
export function maybe_idx_key_r__(
	item_key_idx_val_ = I__,
	or = null
) {
	return (maybe_a, key)=>
		maybe_idx_key_r_(maybe_a, key, item_key_idx_val_, or)
}
export {
	idx_key_r__ as idx_key_h_2,
	idx_key_r__ as _idx_key_hash_fn,
	idx_key_r__ as _fn__idx_key_hash,
	maybe_idx_key_r__ as _maybe_idx_key_hash_fn,
	maybe_idx_key_r__ as maybe_idx_key_h_2,
}
