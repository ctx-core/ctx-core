export type TupleRest<T extends unknown[]> =
	T['length'] extends 0
		? undefined
		: (((...b:T)=>void) extends (a:unknown, ...b:infer I)=>void ? I : [])
export type TupleFirst<T extends unknown[]> =
	T['length'] extends 0 ? undefined : T[0]
export type TupleExclude<T extends unknown[], E> =
	T extends []
		? [Exclude<T, E>]
		: T extends [infer Head, ...infer Tail]
			? [Exclude<Head, E>, ...TupleExclude<Tail, E>]
			: Exclude<T[number], E>[]
export type TupleMemberExtends<T extends Readonly<unknown[]>, E> =
	T extends Readonly<[infer Head, ...infer Tail]>
		? Head extends E
			? true
			: Tail extends unknown[]
				? TupleMemberExtends<Tail, E>
				: { ERROR:'Tail is not an array' }
		: { ERROR:'Head does not extend E' }
export type TupleValues<T extends Readonly<unknown[]>> =
	T extends Readonly<[infer Head, ...infer Tail]>
		? [Head, ...Tail]
		: { ERROR:'Unable to infer Head & Tail from T' }
export type TupleConcat<T> = T extends [infer A extends Readonly<unknown[]>, ...infer Rest extends Readonly<unknown[]>]
	? A extends unknown[] ? [...A, ...TupleConcat<Rest>] : A
	: T
export type TupleToUnion<T extends unknown[]> = T[number]
