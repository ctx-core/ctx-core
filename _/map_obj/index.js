/// <reference types="../index.d.ts" />
/**
 * Maps values in `in_obj` to `fn`, returning object with values returned by `fn`.
 * @param {object}in_obj
 * @param {map_obj_fn_T}fn
 * @returns {object}
 */
export function map_obj(in_obj, fn) {
	const obj = {}
	for (let key in in_obj) {
		obj[key] = fn(in_obj[key], key)
	}
	return obj
}
export { map_obj as map__obj }
/**
 * Returns function to map `obj` to `fn` returning object with values.
 * @param {map_obj_fn_T}fn
 * @returns {(obj:object)=>object}
 * @private
 */
export function map_obj_(fn) {
	return obj=>map_obj(obj, fn)
}
export {
	map_obj_ as _map_obj,
	map_obj_ as _map__obj,
	map_obj_ as _fn__map__obj,
}
