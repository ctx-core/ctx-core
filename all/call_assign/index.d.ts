/**
 * Assigns function calls into obj
 */
export declare function call_assign<I>(
	obj:Record<string, I>,
	...assign_fn_h_a:Record<string, assign_fn_T<I>>[]
):Record<string, I>
export declare type assign_fn_T<I> = (value:I, obj?:Record<string, I>, key?:string)=>I
export { call_assign as assign__call }
