/**
 * Returns the truthiness of all values in `in_value_a`
 */
export declare function notnot<I>(in_value_a:I|I[]):boolean
/**
 * Returns function that calls [notnot](#notnot) with [wrap_concat](#wrap_concat) of the arguments.
 */
export declare function notnot_<Val>(in_value_a:Val|Val[]):(val:Val)=>boolean
export declare type notnot_T<Val> = (val:Val)=>boolean
export { notnot_ as _notnot, }
