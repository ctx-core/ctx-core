import { difference_set_ } from '../difference_set/index.js'
import { wrap_aa_ } from '../wrap_aa/index.js'
/**
 * Returns the difference of n arrays
 * @param {import('../a_nowrap/index.js').a_nowrap_T}aa_nowrap
 * @returns {import('../wrap_aa/index.js').wrap_aa_T[]}
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export function difference_a_(aa_nowrap) {
	const aa = wrap_aa_(aa_nowrap)
	return Array.from(difference_set_(/** @type {unknown} */aa))
}
export {
	difference_a_ as _difference__a1,
}
