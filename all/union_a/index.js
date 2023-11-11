import { union_set_ } from '../union_set/index.js'
import { wrap_aa_ } from '../wrap_aa/index.js'
/**
 * Returns the union of n arrays
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 * @param {import('../a_nowrap/index.js').a_nowrap_T}aa_nowrap
 * @returns {import('../wrap_aa_item/index.js').wrap_aa_item_T[]}
 * @private
 */
export function union_a_(aa_nowrap) {
	const a2 = wrap_aa_(aa_nowrap)
	return Array.from(union_set_(a2))
}
export {
	union_a_ as _union__a1,
	union_a_ as _uniq,
	union_a_ as _uniq__a1,
}
