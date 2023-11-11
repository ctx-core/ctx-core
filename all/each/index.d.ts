/**
 * Iterate over each item in `a` with `fn(a[i], i)`.
 */
export declare function each<
	I extends unknown = unknown
>(
	a:readonly I[], fn:each_fn_T<I>
):I[]
export declare function maybe_each<
	I extends unknown = unknown, Or = null
>(
	maybe_a:readonly I[]|undefined, fn:each_fn_T<I>, or?:Or
):I[]|Or
export declare type each_fn_T<I> = (val:I, idx:number)=>void
