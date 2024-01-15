/**
 * Returns the _last item in the in_a
 */
export declare function last_<I>(a:readonly I[]):I|undefined
export declare function maybe_last_<I, Or = null>(
	maybe_a:readonly I[]|undefined,
	or?:Or
):I|Or
export {
	last_ as _last,
	last_ as _last__a1,
	maybe_last_ as _maybe_last,
}
