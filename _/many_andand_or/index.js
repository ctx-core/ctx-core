/// <reference types="../andand/index.d.ts" />
/// <reference types="../andand_or/index.d.ts" />
/// <reference types="../many_andand_or/index.d.ts" />
import { andand_or } from '../andand_or/index.js'
/**
 * @param {andand_key_T}name_a
 * @param {andand_or_T}or_
 * @returns {many_andand_or_T}
 */
export function many_andand_or_(name_a, or_) {
	return (obj, ...arg_a)=>andand_or(obj, arg_a.concat(name_a), or_)
}
export {
	many_andand_or_ as _many_andand_or,
	many_andand_or_ as _andand_or__many,
	many_andand_or_ as _andand__or__many,
}
