import type { andand_key_T } from '../andand/index.js'
/**
 * Returns `andand(obj, name_a) || or_fn(obj, val)`
 */
export declare function andand_or<Val, Out>(
	obj:Val,
	name_a:andand_key_T<Val>[],
	or_:andand_or_T<Val, Out>
):Out
export declare type andand_or_T<Val, Out> = (val:Out|null, obj:Val)=>Out
export { andand_or as andand__or }
