/**
 * Calls slice on a
 */
export declare function slice<I, O extends unknown[] = I[]>(
	a:readonly I[],
	begin_idx?:number,
	end_idx?:number
):O
export declare function maybe_slice<I, O extends unknown[] = I[], Or = null>(
	maybe_a:readonly I[]|undefined,
	begin_idx?:number,
	end_idx?:number,
	or?:Or
):O|Or
/**
 * Returns a `slice` function with the given `...arg_a` that takes a Array `a` as it's argument.
 */
export declare function slice_<I>(
	begin_idx?:number, end_idx?:number
):(a:readonly I[])=>I[]
export declare function maybe_slice_<I, Or = null>(
	begin_idx?:number, end_idx?:number, or?:Or
):(maybe_a:readonly I[]|undefined)=>I[]|Or
export {
	slice_ as _slice,
	slice_ as _fn__slice,
	maybe_slice_ as _maybe_slice,
}
