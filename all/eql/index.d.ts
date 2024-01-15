import type { a_nowrap_T } from '../a_nowrap/index.js'
/**
 * Returns `===` operator to all values in `a_unwrap`.
 */
export declare function eql<I>(a_unwrap:I):boolean
/**
 * Returns function that returns `===` operator to all values in `in_value_a`.
 */
export declare function eql_<I>(in_value_a:a_nowrap_T<unknown>):(val:I)=>boolean
export { eql_ as _eql, }
/**
 * Returns function that applies `===` operator to `compare` & `value`.
 */
export declare function eql_2<I>(compare:I):(val:I)=>boolean
export {
	eql_2 as _eql_fn,
	eql_2 as _fn__eql,
}
