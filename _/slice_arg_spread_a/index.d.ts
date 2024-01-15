/**
 * Returns a function that calls fn passing the arguments sliced by slice_arg_a.
 */
export declare function slice_arg_spread_a_<In extends unknown[] = unknown[], Out = unknown>(
	fn:slice_arg_spread_a__arg__T<In, Out>,
	begin_idx?:number,
	end_idx?:number
):slice_arg_spread_a___ret_T<In, Out>
export {
	slice_arg_spread_a_ as slice_arg_spread_a,
	slice_arg_spread_a_ as slice_arg_a1,
	slice_arg_spread_a_ as slice__a1__arg,
}
export declare type slice_arg_spread_a__arg__T<In extends unknown[] = unknown[], Out = unknown> = (
	arg_a:In[number][]
)=>Out
export declare type slice_arg_spread_a__arg_fn_T = slice_arg_spread_a__arg__T
export declare type slice_arg_spread_a___ret_T<In extends unknown[] = unknown[], Out = unknown> = (
	...arg_a:In
)=>Out
export declare type slice_arg_spread_a__ret_T = slice_arg_spread_a__arg__T
