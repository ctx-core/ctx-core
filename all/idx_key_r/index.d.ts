import type { item_key_idx_val_fn_T } from '../array_types/index.js'
/**
 * Returns a Hash where each key is `a[idx][key]` & value is `idx`.
 */
export declare function idx_key_r_<
	Obj extends Record<string, string> = Record<string, string>
>(
	a:readonly Obj[],
	key:string|number,
	item_key_idx_val_?:item_key_idx_val_fn_T<string, Obj>
):idx_key_r_T
export declare type idx_key_r_T = Record<string, number>
export declare function maybe_idx_key_r_<
	Obj extends Record<string, string> = Record<string, string>, Or = null
>(
	maybe_a:readonly Obj[]|undefined,
	key:string|number,
	item_key_idx_val_?:item_key_idx_val_fn_T<string, Obj>,
	or?:Or
):idx_key_r_T|Or
export {
	idx_key_r_ as idx_key_h_,
	idx_key_r_ as _idx_key_hash,
	idx_key_r_ as _hash__key__idx,
	maybe_idx_key_r_ as maybe_idx_key_h_,
	maybe_idx_key_r_ as _maybe_idx_key_hash,
}
/**
 * Returns function that returns from [_idx_key_hash](#_idx_key_hash) with `item_key_idx_val_` function argument.
 */
export declare function idx_key_r__<
	Obj extends Record<string, string> = Record<string, string>
>(
	item_key_idx_val_?:item_key_idx_val_fn_T<string, Obj>
):(a:readonly Obj[], key:string|number)=>idx_key_r_T
export declare function maybe_idx_key_r__<
	Obj extends Record<string, string> = Record<string, string>,
	Or = null
>(
	item_key_idx_val_?:item_key_idx_val_fn_T<string, Obj>,
	or?:Or
):(maybe_a:Obj[]|undefined, key:string)=>idx_key_r_T|Or
export {
	idx_key_r__ as idx_key_h_2,
	idx_key_r__ as _idx_key_hash_fn,
	idx_key_r__ as _fn__idx_key_hash,
	maybe_idx_key_r__ as _maybe_idx_key_hash_fn,
	maybe_idx_key_r__ as maybe_idx_key_h_2,
}
