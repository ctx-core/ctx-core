import type { andand_key_T } from '../andand/index.js'
import type { andand_or_T } from '../andand_or/index.js'
export declare function many_andand_or_<Val, Out>(
	name_a:andand_key_T<Val>[], or_:andand_or_T<Val, Out>
):many_andand_or_T<Val, Out>
export declare type many_andand_or_T<Val, Out> = (obj:Val, ...arg_a:andand_key_T<Val>[])=>Out
export {
	many_andand_or_ as _many_andand_or,
	many_andand_or_ as _andand_or__many,
	many_andand_or_ as _andand__or__many,
}
