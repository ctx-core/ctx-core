/**
 * Returns an `Object.<key,value>` of the given `key_hash[a[][key]] = a[]`.
 */
export declare function key_r_<
	Key extends string,
	Obj extends { [k in Key]:string }
>(
	a:readonly Obj[], key:Key
):Record<string, Obj>
export declare function maybe_key_r_<
	Key extends string,
	Obj extends { [k in Key]:string },
	Or = null
>(
	maybe_a:readonly Obj[]|undefined,
	key:Key,
	or?:Or
):Record<string, Obj>|Or
export {
	key_r_ as key_h_,
	key_r_ as _key_hash,
	key_r_ as _hash__key,
	maybe_key_r_ as maybe_key_h_,
	maybe_key_r_ as _maybe_key_hash,
}
/**
 * Returns a Function using argument `key` that returns value from [_key_hash](#_hash__key).
 */
export declare function key_r__<
	Key extends string,
	Obj extends { [k in Key]:string }
>(
	key:Key
):(a:readonly Obj[])=>Record<string, Obj>
export declare function maybe_key_r__<
	Key extends string,
	Obj extends { [k in Key]:string },
	Or = null
>(
	key:Key, or?:Or
):(maybe_a:readonly Obj[]|undefined)=>Record<string, Obj>|Or
export {
	key_r__ as key_h_2,
	key_r__ as _key_hash_fn,
	key_r__ as _fn__hash__key,
	maybe_key_r__ as maybe_key_h_2,
	maybe_key_r__ as _maybe_key_hash_fn,
}
