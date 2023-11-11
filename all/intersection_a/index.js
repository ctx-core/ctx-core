import { intersection_set_ } from '../intersection_set/index.js'
import { wrap_aa_ } from '../wrap_aa/index.js'
/**
 * Returns the intersection of n arrays
 * @param {import('../a_nowrap/index.js').a_nowrap_T<unknown>}aa_nowrap
 * @returns {import('./index.d.ts').intersection_a_T<unknown>}
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export function intersection_a_(aa_nowrap) {
	const a2 = wrap_aa_(aa_nowrap)
	return Array.from(intersection_set_(/** @type {unknown} */a2))
}
export {
	intersection_a_ as _intersection__a1,
}
