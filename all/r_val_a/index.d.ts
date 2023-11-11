/**
 * Returns Array of `obj[key_a[]]`.
 */
export declare function r_val_a_<
	Val extends unknown = unknown
>(
	obj:Record<string, Val>,
	key_a?:readonly string[]
):Val[]
export declare function maybe_r_val_a_<
	Val extends unknown = unknown, Or = null
>(
	obj:Record<string, Val>|undefined,
	key_a?:readonly string[],
	or?:Or
):Val[]|Or
export {
	r_val_a_ as key_a1_from_val_a1_fn,
	r_val_a_ as _key_a1_from_val_a1,
	r_val_a_ as _a1__val__from__a1__key,
	maybe_r_val_a_ as maybe_key_a1_from_val_a1_fn,
	maybe_r_val_a_ as _maybe_key_a1_from_val_a1,
}
