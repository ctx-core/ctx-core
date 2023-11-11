import { andand } from '../andand/index.js'
/**
 * @param {string|import('../andand/index.js').andand_key_T}name_a
 * @returns {import('#alll/many_andand/index.js').many_andand_T}
 */
export function many_andand_(...name_a) {
	return (obj, ...arg_a)=>andand(obj, ...arg_a, ...name_a)
}
export {
	many_andand_ as _many_andand,
	many_andand_ as _andand__many,
}
