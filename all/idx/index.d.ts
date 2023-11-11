import type { is_match__T } from '../array_types/index.js'
/**
 * Returns idx of first match in `a` with `compare`.
 */
export declare function idx_<
	Val extends unknown = unknown
>(
	in_a:readonly Val[]|undefined,
	compare:is_match__T<Val>
):number
export { idx_ as _idx, }
