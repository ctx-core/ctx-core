export type tuple__o_T<
	T extends readonly unknown[],
	Key extends keyof T[number],
	Val extends keyof T[number]
> = {
	[P in Exclude<keyof T, keyof readonly unknown[]> as T[P][Key]&string]:T[P][Val]
}
