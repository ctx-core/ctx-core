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
// @ts-expect-error TS2456
type _TupleExclude<T extends unknown[], E> =
// @ts-expect-error TS2315
	[Exclude<TupleFirst<T>, E>, ..._TupleExclude<TupleRest<T>, E>]
// @ts-expect-error TS2315
export type TupleExclude<T extends unknown[], E> = _TupleExclude<T, E>
