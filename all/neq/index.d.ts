import type { a_nowrap_T } from '../a_nowrap/index.js'
import type { wrap_a_T } from '../wrap_a/index.js'
/**
 * Returns `!=` operator to all values in `in_value_a`.
 */
export declare function neq<I>(in_value_a:wrap_a_T<I>):boolean
/**
 * Return function that Returns `!=` operator to all values in `in_value_a`.
 */
export declare function neq_<I>(in_value_a:a_nowrap_T<I>):(val:I)=>boolean
export { neq_ as _neq, }
