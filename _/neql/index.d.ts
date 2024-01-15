import type { a_nowrap_T } from '../a_nowrap/index.js'
/**
 * Returns `!==` operator to all values in `a_unwrap`.
 */
export declare function neql<I>(a_unwrap:I):boolean
/**
 * Returns function that returns `!==` operator to all values in `in_value_a`.
 * @param in_value_a
 * @returns {function(*=): boolean}
 */
export declare function neql_<I>(
	in_value_a:a_nowrap_T<unknown>
):(value:I)=>boolean
export { neql_ as _neql, }
