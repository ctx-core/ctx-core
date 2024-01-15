import type { nullish } from '../nullish/index.js'
export declare function parseFloat_andor_<Val, And_Val, Or_Val>(
	val:unknown, and_val_?:(val:Val)=>And_Val, or_val_?:(val:Val|nullish)=>Or_Val
):And_Val|Or_Val
