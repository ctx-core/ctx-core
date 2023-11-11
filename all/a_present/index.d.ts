import { a_length_ } from '../a_length/index.js'
/**
 * Returns true if `a` has a length
 */
export declare function a_present_<
	Val extends unknown = unknown
>(a:readonly Val[]):boolean
export declare function maybe_a_present_fn<
	Val extends unknown = unknown, Or = null
>(
	maybe_a:readonly Val[]|undefined, or?:Or
):boolean|Or
export {
	a_present_ as a1_present_fn,
	a_length_ as _a1_present,
	a_present_ as _present__a1,
	maybe_a_present_fn as _maybea_present_,
	maybe_a_present_fn as maybea_present__fn,
}
