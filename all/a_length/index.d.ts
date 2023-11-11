/**
 * Returns length of `in_a`
 */
export declare function a_length_<
	Val extends unknown = unknown
>(a:readonly Val[]):number
export declare function maybe_a__length_<
	Val extends unknown = unknown, Or = null
>(
	maybe_a:readonly Val[]|undefined, or?:Or
):number|Or
export {
	a_length_ as a_length_fn,
	a_length_ as _a1_length,
	a_length_ as _length__a1,
	maybe_a__length_ as _maybe_a1_length,
	maybe_a__length_ as maybe_a1_length_fn,
}
