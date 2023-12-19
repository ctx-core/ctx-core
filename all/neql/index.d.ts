/**
 * Returns `!==` operator to all values in `a_unwrap`.
 */
export declare function neql<I>(a_unwrap:I):boolean
/**
 * Returns function that returns `!==` operator to all values in `in_value_a`.
 * @param in_value_a
 * @returns {function(*=): boolean}
 */
export declare function neql_<Arg>(in_value_a:Arg[]):(value:Arg)=>boolean
export { neql_ as _neql, }
