import { I__ } from '../combinators/index.js'
/**
 * Returns a filter_h1 with the values filtered by `fn`.
 * @param {object}o
 * @param {(val:any, key:string, h1:object)=>any}fn
 * @returns {import('../filter_o').filter_o_T|undefined}
 */
export function filter_o_(
	o,
	fn = I__
) {
	if (!o) return
	const r = o
	const filter_r = {}
	for (let key in r) {
		filter_r[key] = !!fn(r[key], key, r)
	}
	return filter_r
}
export {
	filter_o_ as filter_r_,
	filter_o_ as filter_h_,
	filter_o_ as _filter_h1,
	filter_o_ as _h1__filter,
}
/**
 * Returns a filter_h where the value is a
 * boolean of whether the array has items present
 * @param {(val:any, key:string, l0_r:object)=>any}fn
 * @returns {(l1_r:object|undefined)=>(import('../filter_o').filter_o_T|undefined)}
 */
export function filter_o__(fn = I__) {
	return (l1_r)=>filter_o_(l1_r, fn)
}
export {
	filter_o__ as filter_r__,
	filter_o__ as filter_h_2,
	filter_o__ as _fn__h1__filter,
}
