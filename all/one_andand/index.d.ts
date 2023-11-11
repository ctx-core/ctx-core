import type { andand_key_T } from '../andand/index.js'
/**
 * Returns a function that calls `andand(obj, ...name_a)`
 */
export declare function one_andand_<
	Val extends unknown = unknown, Out extends unknown = unknown
>(...name_a:andand_key_T<Val>[]):(obj:Val)=>Out|null
export {
	one_andand_ as andand_,
	one_andand_ as _one_andand,
	one_andand_ as _andand,
	one_andand_ as _andand__one,
}
