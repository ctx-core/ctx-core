import type { a_nowrap_T } from '../a_nowrap/index.js'
import type { falsy } from '../falsy/index.js'
/**
 * Returns the first falsy or last item.
 */
export declare function and<I, O = I>(a_nowrap:a_nowrap_T<I>):O|falsy
/**
 * Returns the first falsy or last item function call or value in `in_value_a` .
 */
export declare function and_<I, O = I>(a_nowrap:I):O|falsy
export { and_ as and__fn }
/**
 * Returns function that returns the first falsy or last item function call or value in `in_value_a` .
 */
export declare function and_2<
	A_outer extends unknown[] = unknown[],
	A_inner extends unknown[] = unknown[],
	O = unknown
>(in_value_a:A_inner):(fn_value_a:A_outer)=>O|falsy
export {
	and_2 as _and_fn,
	and_2 as _and__fn,
}
