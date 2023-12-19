import type { wrap_a_T } from '../wrap_a/index.js'
/**
 * Apply the spread operator on `a_unwrap` into `fn` `fn(...a_unwrap)`
 */
export declare function spread<Val, Out>(
	fn:(...a:wrap_a_T<Val>)=>Out,
	a_unwrap:Val
):Out
/**
 * Returns a function taking an array calling [spread](#spread)
 */
export declare function spread_<Val, Out>(
	fn:(...a:wrap_a_T<Val>)=>Out
):(a_unwrap:Val)=>Out
export {
	spread_ as spread_fn,
	spread_ as _spread,
}
