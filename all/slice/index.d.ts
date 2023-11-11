/**
 * Calls slice on a
 */
export declare function slice<
	I extends unknown = unknown, O extends unknown = readonly I[]
>(
	a:readonly  I[],
	begin_idx?:number,
	end_idx?:number
):O
export declare function maybe_slice<
	I extends unknown = unknown,
	O extends unknown = readonly I[],
	Or = null
>(
	maybe_a:readonly I[]|undefined,
	begin_idx?:number,
	end_idx?:number,
	or?:Or
):O|Or
/**
 * Returns a `slice` function with the given `...arg_a` that takes a Array `a` as it's argument.
 */
export declare function slice_<
	I extends unknown = unknown
>(
	begin_idx?:number, end_idx?:number
):(a:readonly I[])=>I[]
export declare function maybe_slice_<
	I extends unknown = unknown, Or = null
>(
	begin_idx?:number, end_idx?:number, or?:Or
):(maybe_a:readonly I[]|undefined)=>I[]|Or
export {
	slice_ as _slice,
	slice_ as _fn__slice,
	maybe_slice_ as _maybe_slice,
}
