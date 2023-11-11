import { map_obj } from '../map_obj/index.js'
import { one_andand_ } from '../one_andand/index.js'
/** @typedef {import('../andand/index.d.ts').andand_key_T} */
/**
 * Map `values` `andand` `key_a` in `obj` to `fn`, returning object with values return by `fn`.
 * @param {object}obj
 * @param {andand_key_T}key_a
 * @returns {object}
 */
export function map_obj_andand(obj, ...key_a) {
	return map_obj(obj, one_andand_(...key_a))
}
export { map_obj_andand as map__obj__andand }
/**
 * Returns function to
 * map `values` `andand` `key_a` in `obj` to `fn`, returning object with values return by `fn`.
 * @param {andand_key_T}key_a
 * @returns {(obj:object)=>object}
 * @private
 */
export function map_obj_andand_(...key_a) {
	return (obj)=>map_obj_andand(obj, ...key_a)
}
export {
	map_obj_andand_ as _map_obj_andand,
	map_obj_andand_ as _map__obj__andand,
	map_obj_andand_ as _fn__map__obj__andand,
}
