import { map } from '../map/index.js'
import { one_andand_or_ } from '../one_andand_or/index.js'
/**
 * Returns Array of mapped `a` with `_andand(...attr_a)` or the return value of `or_fn`.
 * @param {unknown[]}a
 * @param {import('../andand/index.js').andand_key_T[]}attr_a
 * @param {import('../andand/index.js').andand_or_T}or_fn
 * @returns {unknown[]}
 */
export function map_andand_or(a, attr_a, or_fn) {
	return map(a, one_andand_or_(attr_a, or_fn))
}
export { map_andand_or as map__andand__or, }
