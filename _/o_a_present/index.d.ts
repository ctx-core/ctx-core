import type { filter_o_T } from '../filter_o/index.js'
/**
 * Returns an Object where the value is a
 * boolean of whether the array has items present
 */
export declare function o_a_present<
	Val,
	Obj extends { [key:string]:Val[] } = { [key:string]:Val[] }
>(o:Obj):filter_o_T|undefined
export {
	o_a_present as r_a_present,
	o_a_present as h_a_present,
	o_a_present as _h1__present__a1,
}
