import type { is_match__T } from '../array_types/index.js'
/**
 * Returns Array where items in `a` are filtered by `fn`.
 */
export declare function filter<Val>(
	a:readonly Val[],
	is_match_fn:is_match__T<Val>
):Val[]
export declare function maybe_filter<Val, Or = null>(
	maybe_a:readonly Val[]|undefined,
	is_match_fn:is_match__T<Val>,
	or?:Or
):Val[]|Or
/**
 * Returns function that returns value from [filter](#filter) with `fn` argument.
 */
export declare function filter_<I>(
	is_match_fn:is_match__T<I>
):(a:readonly I[])=>I[]
export declare function maybe_filter_<I>(
	is_match_fn:is_match__T<I>
):(maybe_a:readonly I[]|undefined)=>I[]
export {
	filter_ as _filter,
	filter_ as _fn__filter,
	maybe_filter_ as _maybe_filter,
}
