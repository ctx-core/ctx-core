export declare function noinit_<Arg, Ret>(
	fn:(...args:Arg[])=>Ret,
	times?:number
):noinit_T<Arg, Ret>
export declare type noinit_T<Arg, Ret> = (...args:Arg[])=>Ret|undefined
export { noinit_ as _noinit, }
