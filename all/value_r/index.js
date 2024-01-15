/**
 * Returns a Hash with a key for each item in `value_a` & value set to the return of `value_`.
 * @param {string[]|undefined}in_key_a
 * @param {(key:string, i:number)=>unknown}value_
 * @returns {Record<string, unknown>}
 */
export function value_r_(in_key_a, value_) {
	const value_r = {}
	if (in_key_a) {
		const key_a = in_key_a
		for (let i = 0; i < key_a.length; i++) {
			const key = key_a[i]
			value_r[key] = value_(key, i)
		}
	}
	return value_r
}
export {
	value_r_ as value_h_,
	value_r_ as value_hash_fn,
	value_r_ as _value_hash,
	value_r_ as _hash__value,
}
/**
 * Returns a Function that returns from [_value_hash](#_value_hash).
 * @param value_{(key:string, idx:number)=>unknown}
 * @returns {(value_a:string[])=>Record<string, unknown>}
 */
export function value_r_2(value_) {
	return value_a=>value_r_(value_a, value_)
}
export {
	value_r_2 as value_h_2,
	value_r_2 as value_hash_fn2,
	value_r_2 as _value_hash_fn,
	value_r_2 as _fn__hash__value,
}
