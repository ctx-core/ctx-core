import type { andand_key__T } from '../andand/index.js'
export declare function many_andand_<
	Val extends unknown = unknown
>(...name_a:(keyof Val|andand_key__T<Val>)[]):many_andand_T<Val>
export {
	many_andand_ as _many_andand,
	many_andand_ as _andand__many,
}
export declare type many_andand_T<
	Val extends unknown = unknown
> = (obj:Val, ...arg_a:(keyof Val|andand_key__T<Val>)[])=>Val|null
