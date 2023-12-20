/// <reference types="../resolver_curry/index.d.ts" />
import { curry_ } from '../curry/index.js'
/**
 * @param append{append_current_T}
 * @returns {resolver_curry_T<unknown>}
 */
export function flip(append) {
	return curry_((local, arg_a)=>
		Array.prototype.unshift.apply(local, arg_a))(append)
}
export { flip as curry__flip }
