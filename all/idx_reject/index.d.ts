import type { is_match__T } from '../array_types/index.js'
/**
 * Returns Array of indices `idx` not rejected by `is_match_`.
 */
export declare function idx_reject<Val>(
	a:readonly Val[], is_match_:is_match__T<Val>
):number[]
export declare function maybe_idx_reject<Val, Or = null>(
	maybe_a:readonly Val[]|undefined,
	is_match_:is_match__T<Val>,
	or?:Or
):number[]|Or
export { idx_reject as reject__idx, }
/**
 * Returns function that returns value from [idx_reject](#idx_reject) with `is_match_` argument.
 */
export declare function idx_reject_<Val>(
	is_match_:is_match__T<Val>
):(a:readonly Val[])=>number[]
export {
	idx_reject_ as _idx_reject,
	idx_reject_ as _reject__idx,
	idx_reject_ as _fn__reject__idx,
}
