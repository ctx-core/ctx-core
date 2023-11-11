import type { LessThan } from '../LessThan/index.js'
/**
 * @see {@link https://stackoverflow.com/a/70468769/142571}
 */
export type NumericRange<
	F extends number,
	T extends number
> = Exclude<T|LessThan<T>, LessThan<F>>
