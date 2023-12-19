import type { wrap_a_T } from '../wrap_a/index.js'
/**
 * Returns `!=` operator to all values in `in_value_a`.
 */
export declare function neq<I>(in_value_a:wrap_a_T<I>):boolean
/**
 * Return function that Returns `!=` operator to all values in `in_value_a`.
 */
export declare function neq_<I>(in_value_a:I|I[]):(val:I)=>boolean
export { neq_ as _neq, }
