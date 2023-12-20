/// <reference types="../index.d.ts" />
import { wrap_a_ } from '../wrap_a/index.js'
/**
 * Apply the spread operator on `a_unwrap` into `fn`; `fn(...a_unwrap)`
 * @param {(...a:wrap_a_T)=>unknown}fn
 * @param {unknown}a_unwrap
 * @returns {unknown}
 */
export function spread(fn, a_unwrap) {
	const wrap_a = wrap_a_(a_unwrap)
	return fn(...wrap_a)
}
/**
 * Returns a function taking an array calling [spread](#spread)
 * @param {(...a:wrap_a_T)=>unknown}fn
 * @returns {(a_unwrap:unknown)=>unknown}
 */
export function spread_(fn) {
	return a_unwrap=>spread(fn, a_unwrap)
}
export {
	spread_ as spread_fn,
	spread_ as _spread,
}
