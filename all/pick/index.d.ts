/**
 * New `obj` with only `key_a` keys.
 */
export declare function pick<
	I extends object = object
>(obj:I, ...key_a:string[]):Partial<I>
export declare function maybe_pick<
	I extends object = object
>(obj:I, ...key_a:string[]):Partial<I>|unknown
/**
 * Returns a function that calls [pick](#pick) with the given `...in_key_a`
 */
export declare function pick_<
	I extends object = object
>(
	...in_key_a:string[]
):(obj:I, ...fn_key_a:string[])=>Partial<I>
export { pick_ as _pick, }
