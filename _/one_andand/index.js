/// <reference types="../index.d.ts" />
import { andand } from '../andand/index.js'
/**
 * Returns a function that calls `andand(obj, ...name_a)`
 * @param {andand_key_T}name_a
 * @returns {(obj:unknown)=>unknown}
 */
export function one_andand_(...name_a) {
	return obj=>andand(obj, ...name_a)
}
export {
	one_andand_ as andand_,
	one_andand_ as _one_andand,
	one_andand_ as _andand,
	one_andand_ as _andand__one,
}
