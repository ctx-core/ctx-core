/**
 * Returns an Immediately-invoked function expression
 * @param {unknown}fn
 * @param {unknown}arg_a
 * @returns {unknown}
 */
export function iife(fn, ...arg_a) {
	return fn(...arg_a)
}
