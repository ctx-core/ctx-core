/// <reference types="../wrap_a/index.d.ts" />
import { isArray } from '../isArray/index.js'
import { wrap_concat } from '../wrap_concat/index.js'
/**
 * Flattens the a & it's children into an array without chunks
 * @param {wrap_a_T2}a
 * @returns {unknown[]}
 */
export function flatten(a) {
	return (
		a.reduce((previous_val, current_val)=>
			wrap_concat(
				previous_val,
				...isArray(current_val)
					? flatten(current_val)
					: [current_val]),
		[]))
}
/**
 * @param in_a{wrap_a_T2}
 * @param or{unknown[]|null|undefined}
 * @returns {unknown[]|null|undefined}
 */
export function maybe_flatten(in_a, or = null) {
	if (!in_a) return or
	return flatten(in_a)
}
export { flatten as flatten__a1, }
