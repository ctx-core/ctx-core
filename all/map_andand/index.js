import { andand } from '../andand/index.js'
import { andand_ } from '../one_andand/index.js'
/** @typedef {import('../andand/index.d.ts').andand_key_T} */
/**
 * Returns Array of mapped `a` with `andand_(...name_a)`.
 * @param {unknown[]}a
 * @param {andand_key_T}name_a
 * @returns {unknown[]}
 */
export function map_andand(a, ...name_a) {
	return a.map(item=>andand(item, ...name_a))
}
/**
 * @param {unknown[]|undefined}a
 * @param {andand_key_T}name_a
 * @returns {unknown[]|undefined}
 */
export function maybe_map_andand(a, ...name_a) {
	return a?.map(andand_(...name_a))
}
export { map_andand as map__andand, }
/**
 * Returns function that returns value from [map_andand](#map_andand) with `...attr_a`.
 * @param {andand_key_T}attr_a
 * @returns {(a:unknown[])=>unknown[]}
 */
export function map_andand_(...attr_a) {
	return a=>map_andand(a, ...attr_a)
}
export {
	map_andand_ as _map_andand,
	map_andand_ as _map__andand,
	map_andand_ as _fn__map__andand,
}
