import type { falsy } from '../falsy/index.js'
export declare type maybe<
	I,
	F = falsy
> = I|F
export declare type maybe_undefined<I> = maybe<I, undefined>
export declare type maybe_null<I> = maybe<I, null>
