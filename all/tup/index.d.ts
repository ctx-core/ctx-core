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
export type TupleRest<T extends unknown[]> =
	T['length'] extends 0 ? undefined :
		(((...b: T) => void) extends (a, ...b: infer I) => void ? I : [])
export type TupleFirst<T extends unknown[]> =
	T['length'] extends 0 ? undefined : T[0]
export type TupleExclude<T extends unknown[], E> =
	[Exclude<TupleFirst<T>, E>, ...TupleExclude<TupleRest<T>, E>]
