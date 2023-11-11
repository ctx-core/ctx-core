/**
 * @see {@link https://stackoverflow.com/a/58939723/142571}
 */
export type zip__tuple_a_T<
	T extends readonly any[],
	U extends readonly any[]
> = {
	[K in keyof T]:[
		T[K],
		K extends keyof U ? U[K] : never
	]
}

