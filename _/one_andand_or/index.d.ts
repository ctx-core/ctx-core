import type { andand_key_T } from '../andand/index.js'
import type { andand_or_T } from '../andand_or/index.js'
/**
 * Returns function that calls `andand_or(obj, name_a, or_fn)`
 */
export declare function one_andand_or_<In, Out>(
	name_a:andand_key_T<In>[],
	or_:andand_or_T<In, Out>
):(obj:In)=>Out
export {
	one_andand_or_ as andand_or_,
	one_andand_or_ as _one_andand_or,
	one_andand_or_ as _andand_or,
	one_andand_or_ as _andand__or,
	one_andand_or_ as _andand_or__one,
	one_andand_or_ as _andand_or__or__one,
}
