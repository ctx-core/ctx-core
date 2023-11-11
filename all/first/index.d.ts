/**
 * Returns the first item in `a`.
 */
export declare function first_<
	I extends unknown = unknown
>(a:readonly I[]):I|undefined
export declare function maybe_first_<
	I extends unknown = unknown,
	Or = null
>(
	maybe_a:readonly I[]|undefined,
	or?:Or
):I|Or
export {
	first_ as _first,
	maybe_first_ as _maybe_first,
}
