import type { nullish } from '../nullish/index.js'
export declare function nullish_or_<
	Out = unknown,
	Val = unknown
>(val:Val, or_:()=>Out):Out|nullish
