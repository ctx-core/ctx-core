/**
 * @see {@link https://stackoverflow.com/a/70468769/142571}
 */
export type LessThan<
	N extends number,
	A extends any[] = []
> =
	N extends A['length']
		? A[number]
		: LessThan<N, [...A, A['length']]>
