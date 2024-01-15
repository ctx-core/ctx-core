import type { andand_key_T } from '../andand/index.js'
import type { andand_or_T } from '../andand_or/index.js'
/**
 * Returns Array of mapped `a` with `_andand(...attr_a)` or the return value of `or_fn`.
 */
export declare function map_andand_or<In, Out>(
	a:readonly In[],
	attr_a:readonly andand_key_T<In>[],
	or_fn:andand_or_T<In, Out>
):Out[]
export { map_andand_or as map__andand__or, }
