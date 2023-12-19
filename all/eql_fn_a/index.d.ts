import type { a_item_T } from '../a_item/index.js'
/**
 * Is i0_a `===` to i1_a based on `fn(a, b, i)`? Checks first level equality.
 */
export declare function eql_fn_a_<I>(
	i0_a:readonly I[],
	i1_a:readonly I[],
	fn:(a:a_item_T<I>, b:a_item_T<I>, idx:number)=>boolean,
):boolean
export {
	eql_fn_a_ as eql_fn_a1_fn,
	eql_fn_a_ as _eql_fn_a1,
	eql_fn_a_ as _eql__a1__fn,
}
