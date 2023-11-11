/**
 * Returns length of `in_a`
 * @param {unknown[]}a
 * @returns {number}
 */
export function a_length_(a) {
	return a.length
}
export {
	a_length_ as a_length_fn,
	a_length_ as _a1_length,
	a_length_ as _length__a1,
}
export function maybe_a__length_(maybe_a, or = false) {
	return maybe_a ? a_length_(maybe_a) : or
}
export {
	maybe_a__length_ as maybe_a_length$,
	maybe_a__length_ as _maybe_a1_length,
	maybe_a__length_ as maybe_a1_length_fn,
}
