/**
 * Returns true if every `predicate(value)` is truthy
 */
export declare function every<
	I extends unknown = unknown
>(
	a:readonly I[],
	predicate:(item:I, idx:number, a:readonly I[])=>boolean
):boolean
export declare function maybe_every<
	I extends unknown = unknown, Or = null
>(
	maybe_a:readonly I[]|undefined,
	predicate:(item:I, idx:number, a:readonly I[])=>boolean,
	or?:Or
):boolean|Or
export {
	every as every_a1,
	every as every__a1,
}
/**
 * Returns a function that returns from [every](#every) with the given `predicate` function.
 */
export declare function every_<
	I extends unknown = unknown
>(
	predicate:(item:I, idx:number, a:readonly I[])=>boolean
):(a:readonly I[])=>boolean
export {
	every_ as _every,
	every_ as _every_fn,
	every_ as _fn__every,
}
