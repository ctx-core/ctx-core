/// <reference types="../index.d.ts" />
import { andandfn_ } from '../andandfn/index.js'
/** @typedef {andand_key_T} */
/**
 * Returns Array of mapped `a` with `andandfn_(...attr_a)`
 * @param {unknown[]}a
 * @param {andand_key_T}attr_a
 * @returns {unknown[]}
 */
export function map_andandfn(a, ...attr_a) {
	return a.map(andandfn_(...attr_a))
}
export {
	map_andandfn as map__andand_,
	map_andandfn as map__andand__fn,
}
/**
 * Returns function that returns value from [map_andand_](#map_andand_) with `...attr_a`.
 * @param {andand_key_T}attr_a
 * @returns {(a:unknown[])=>unknown[]}
 */
export function map_andandfn_(...attr_a) {
	return a=>map_andandfn(a, ...attr_a)
}
export {
	map_andandfn_ as map_andand_2,
	map_andandfn_ as _map_andand_,
	map_andandfn_ as _map__andand_,
	map_andandfn_ as _fn__map__andand__fn,
}
