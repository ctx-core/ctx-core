import { nullish__none_ } from '../nullish__none/index.js'
/**
 * @param fn{(...arg_a:unknown)=>unknown}
 * @param {unknown}arg_a
 * @returns {unknown}
 */
export function run(fn, ...arg_a) {
	return nullish__none_([fn], ()=>fn(...arg_a))
}
export { run as _ }
