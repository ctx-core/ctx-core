import { assign } from '../assign/index.js'
/**
 * @param {object[]}arg_a
 * @returns {object}
 */
export function a_assign(arg_a) {
	return assign(arg_a[0], ...arg_a.slice(1))
}
export {
	a_assign as a1_assign,
	a_assign as assign__a1,
}
