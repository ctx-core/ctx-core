import { a_present_ } from '../a_present/index.js'
import { filter_o__ } from '../filter_o/index.js'
/** @typedef {import('../filter_o/index.d.ts').filter_o_T} */
/**
 * Returns a filter_h where the values are a boolean of whether the array has items present
 * @param {object}o
 * @returns {filter_r_T|undefined}
 */
export function o_a_present(o) {
	return filter_o__(val=>
		a_present_(val)
	)(o)
}
export {
	o_a_present as r_a_present,
	o_a_present as h_a_present,
	o_a_present as _h1__present__a1,
}
