export declare function tup<
	Args extends readonly unknown[]
>(...data:Args):Args
export declare type tup_T<
	Args extends readonly unknown[]
> = (...data:Args)=>Args
export {
	tup as tuple,
	tup as tuple_,
	tup as _tuple,
	tup as _tup,
	tup as tup_fn,
}
