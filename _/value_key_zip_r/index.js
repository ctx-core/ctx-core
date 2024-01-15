import { zip } from '../zip/index.js'
/**
 * Returns an Object the key & value are set from the zipped `a_i0` & `a_i1` Array of `[key, value]` pairs.
 * @param {[(string|number|symbol)[], (string|number|symbol)[]]}aa
 * @returns {Record<(string|number|symbol)[], (string|number|symbol)[]>}
 */
export function value_key_zip_r_(aa) {
	const [a_i0, a_i1] = aa
	const value_key_zip_r = {}
	const value_key_aa = zip([a_i0, a_i1])
	for (const kv of value_key_aa) {
		value_key_zip_r[kv[0]] = kv[1]
	}
	return value_key_zip_r
}
export {
	value_key_zip_r_ as value_key_zip_h_,
	value_key_zip_r_ as _value_key_zip_hash,
	value_key_zip_r_ as _hash__zip__key__value,
}
