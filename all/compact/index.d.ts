/**
 * Removes null values from the array
 */
export declare function compact<
	I extends unknown = unknown
>(a:readonly I[]):I[]
export declare function maybe_compact<
	I extends unknown = unknown, Or = null
>(
	maybe_a:readonly I[]|undefined, or?:Or
):I[]|Or
export {
	compact as compact_a1,
	compact as compact__a1,
}
