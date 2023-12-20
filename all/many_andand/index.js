/// <reference types="../andand/index.d.ts" />
/// <reference types="../many_andand/index.d.ts" />
import { andand } from '../andand/index.js'
/**
 * @param {string|andand_key_T}name_a
 * @returns {many_andand_T}
 */
export function many_andand_(...name_a) {
	return (obj, ...arg_a)=>andand(obj, ...arg_a, ...name_a)
}
export {
	many_andand_ as _many_andand,
	many_andand_ as _andand__many,
}
