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
	T['length'] extends 0
		? undefined
		: (((...b:T)=>void) extends (a:unknown, ...b:infer I)=>void ? I : [])
export type TupleFirst<T extends unknown[]> =
	T['length'] extends 0 ? undefined : T[0]
type _TupleExclude<T extends unknown[], E, Rest> =
	[Exclude<TupleFirst<T>, E>, Rest]
export interface TupleExclude<
	T extends unknown[], E
> extends _TupleExclude<
	T,
	E,
	TupleExclude<
		// @ts-expect-error TS2344
		TupleRest<T>,
		E
	>
> {
}
