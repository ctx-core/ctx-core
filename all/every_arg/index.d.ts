import type { nullish } from '../nullish/index.js'
/**
 * If the function args pass every_fn condition, the return value is the function; else return or value
 */
export declare function every_arg_<
	F extends (...args:any[])=>any,
	E extends (
		$:Parameters<F>,
		index?:number,
		$a?:any[]
	)=>any,
	O extends ()=>ReturnType<F>|nullish
>(
	fn:F, every_fn?:E, or_?:O
):F
