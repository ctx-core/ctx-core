export declare function noinit_<
	Arg extends unknown = unknown,
	Ret extends unknown = unknown
>(fn:(...args:Arg[])=>Ret, times?:number):noinit_T<Arg, Ret>
export declare type noinit_T<
	Arg extends unknown = unknown,
	Ret extends unknown = unknown
> = (...args:Arg[])=>Ret|undefined
export { noinit_ as _noinit, }
