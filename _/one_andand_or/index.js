/// <reference types="../index.d.ts" />
import { andand_or } from '../andand_or/index.js'
/**
 * Returns function that calls `andand_or(obj, name_a, or_)`
 * @param {andand_key_T[]}name_a
 * @param {andand_or_T}or_
 * @returns {(obj:unknown)=>unknown}
 */
export function one_andand_or_(name_a, or_) {
	return (obj)=>andand_or(obj, name_a, or_)
}
export {
	one_andand_or_ as andand_or_,
	one_andand_or_ as _one_andand_or,
	one_andand_or_ as _andand_or,
	one_andand_or_ as _andand__or,
	one_andand_or_ as _andand_or__one,
	one_andand_or_ as _andand_or__or__one,
}
