/**
 * Returns an Array from slicing an array from an array's offset from position i
 */
export declare function offset_i_slice<
	I extends unknown = unknown
>(
	a:readonly I[],
	i:number,
	offset?:number
):I[]
export declare function maybe_offset_i_slice<
	I extends unknown = unknown, Or = null
>(
	maybe_a:readonly I[]|undefined,
	i:number,
	offset?:number,
	or?:Or
):I[]|Or
export { offset_i_slice as slice__i__offset, }
