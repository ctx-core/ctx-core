import { curry_ } from '../curry/index.js'
/**
 * @param append{import('../resolver_curry').append_current_T}
 * @returns {import('../resolver_curry').resolver_curry_T<unknown>}
 */
export function flip(append) {
	return curry_((local, arg_a)=>
		Array.prototype.unshift.apply(local, arg_a))(append)
}
export { flip as curry__flip }
