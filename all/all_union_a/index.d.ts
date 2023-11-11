declare function all_union_a__<T>():
	<U extends T[]>(
		a:all_union_a_T<T, U>
	)=>all_union_a_T<T, U>
export type all_union_a_T<T, U extends T[]> =
	U
	&([T] extends [U[number]] ? unknown : 'Invalid')
	&{
	0:T
}
