import type { a_nowrap_T } from '../a_nowrap/index.js'
import type { falsy } from '../falsy/index.js'
/**
 * Returns function that returns the first falsy in `a_unwrap` or `value`.
 */
export declare function left_and_<Val>(a_unwrap:a_nowrap_T<Val>):(val:Val)=>Val|falsy
export {
	left_and_ as _left_and,
	left_and_ as _and__left,
}
