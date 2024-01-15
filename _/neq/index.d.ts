import type { a_nowrap_T } from '../a_nowrap/index.js'
/**
 * Returns `!=` operator to all values in `in_value_a`.
 */
export declare function neq<I>(a_unwrap:I):boolean
/**
 * Return function that Returns `!=` operator to all values in `in_value_a`.
 */
export declare function neq_<I>(in_value_a:a_nowrap_T<unknown>):(val:I)=>boolean
export { neq_ as _neq, }
