/**
 * Returns an Object the key & value are set from the zipped `a_i0` & `a_i1` Array of `[key, value]` pairs.
 */
export declare function value_key_zip_r_<
	K extends (string|number|symbol),
	V extends unknown
>(
	[a_i0, a_i1]:[readonly K[], readonly V[]]
):Record<K, V>
export {
	value_key_zip_r_ as _value_key_zip_hash,
	value_key_zip_r_ as _hash__zip__key__value,
}
