import type { wrap_a_T } from '../wrap_a/index.js'
/**
 * Apply the spread operator on `a_unwrap` into `fn` `fn(...a_unwrap)`
 */
export declare function spread<
	Val extends unknown = unknown, Out extends unknown = unknown
>(
	fn:(...a:wrap_a_T<Val>)=>Out,
	a_unwrap:Val
):Out
/**
 * Returns a function taking an array calling [spread](#spread)
 */
export declare function spread_<
	Val extends unknown = unknown, Out extends unknown = unknown
>(
	fn:(...a:wrap_a_T<Val>)=>Out
):(a_unwrap:Val)=>Out
export {
	spread_ as spread_fn,
	spread_ as _spread,
}
