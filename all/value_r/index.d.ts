/**
 * Returns a Hash with a key for each item in `value_a` & value set to the return of `value_`.
 */
export declare function value_r_<
	Out extends unknown = unknown
>(
	in_key_a:readonly string[]|undefined,
	value_:(key:string, i:number)=>Out
):Record<string, Out>
export {
	value_r_ as value_h_,
	value_r_ as value_hash_fn,
	value_r_ as _value_hash,
	value_r_ as _hash__value,
}
/**
 * Returns a Function that returns from [_value_hash](#_value_hash).
 */
export declare function value_r_2<
	Out extends unknown = unknown
>(
	value_:(key:string, idx:number)=>Out
):(value_a:readonly string[])=>Record<string, Out>
export {
	value_r_2 as value_h_2,
	value_r_2 as value_hash_fn2,
	value_r_2 as _value_hash_fn,
	value_r_2 as _fn__hash__value,
}
