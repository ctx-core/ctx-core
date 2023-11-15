export declare function memo_<
	ret_T,
	arg_a_T extends Array<unknown>,
>(fn:(...arg_a:arg_a_T)=>ret_T):((...arg_a:arg_a_T)=>ret_T)&{
	clear():void
}
