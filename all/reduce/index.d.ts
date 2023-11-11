/**
 * Returns reduced `memo` iterating over `a` with `fn(memo, a[], i, a)`.
 */
export declare function reduce<
	I extends unknown = unknown, O extends unknown = unknown
>(
	a:readonly I[],
	fn:reduce_fn_T<I, O>,
	memo:O
):O
export declare type reduce_fn_T<
	I extends unknown = unknown, O extends unknown = unknown
> = (
	memo:O, item:I, idx:number, a:readonly I[]
)=>O
export declare function maybe_reduce<
	I extends unknown = unknown,
	O extends unknown = unknown,
	Or = null
>(
	maybe_a:readonly I[]|undefined,
	fn:reduce_fn_T<I, O>,
	memo:O,
	or?:Or
):O|Or
/**
 * Return Function that returns from `reduce` with `fn` and factory `memo_(a)`.
 */
export declare function reduce_<
	I extends unknown = unknown, O extends unknown = unknown
>(
	fn:reduce_fn_T<I, O>, memo_:memo_fn_T<I, O>
):(a:readonly I[], memo:O)=>O
export declare type memo_fn_T<
	I extends unknown = unknown, O extends unknown = unknown
> =
	(a:readonly I[])=>O
export declare function maybe_reduce_<
	I extends unknown = unknown,
	O extends unknown = unknown,
	Or = null
>(
	fn:reduce_fn_T<I, O|undefined>,
	memo_fn:memo_fn_T<I, O>|undefined,
	or?:Or
):(a:readonly I[], memo:O)=>O|Or
export {
	reduce_ as _reduce,
	reduce_ as _fn__reduce,
	maybe_reduce_ as _maybe_reduce,
}
