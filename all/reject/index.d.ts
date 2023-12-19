import type { is_match__T } from '../array_types/index.js'
/**
 * Returns Array of items not rejected by `fn`.
 */
export declare function reject<Val, Out = readonly Val[]>(
	a:readonly Val[],
	is_match_:is_match__T<Val>
):Out
export declare function maybe_reject<
	Val,
	Out = readonly Val[],
	Or = null
>(
	maybe_a:readonly Val[]|undefined,
	is_match_:is_match__T<Val>,
	or?:Or
):Out|Or
/**
 * Returns function that returns value from [reject](#reject) with `fn` argument.
 */
export declare function reject_<I, O = readonly I[]>(
	is_match_:is_match__T<I>
):(a:readonly I[])=>O
export declare function maybe_reject_<I, O = readonly I[], Or = null>(
	is_match_:is_match__T<I>,
	or?:Or
):(a:readonly I[]|undefined)=>O|Or
export {
	reject_ as _reject,
	reject_ as _fn__reject,
	maybe_reject_ as _maybe_reject,
}
