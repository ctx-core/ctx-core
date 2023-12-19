/**
 * Returns a function than returns the called fn_a(value) chained with ands
 */
export declare function and_call_<I, O>(
	fn_a:((in_value:I)=>O)[]
):and_fn_call_T<I, O>
export declare type and_fn_call_T<I, O> = (in_value:I)=>O|null
export {
	and_call_ as and_fn_call_fn,
	and_call_ as _and_fn_call,
	and_call_ as _and__fn__call,
}
