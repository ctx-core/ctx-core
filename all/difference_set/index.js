import { union_set_ } from '../union_set/index.js'
import { wrap_a_ } from '../wrap_a/index.js'
/**
 * Returns a new set with a _difference of the array-like arguments.
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export function difference_set_(member_a_nowrap_a_nowrap) {
	const member_a_nowrap_a = wrap_a_(member_a_nowrap_a_nowrap)
	const root_a_nowrap = member_a_nowrap_a[0]
	const rest_a_nowrap_a = member_a_nowrap_a.slice(1)
	const root_a = wrap_a_(root_a_nowrap)
	const rest_set = union_set_(rest_a_nowrap_a)
	let set_member_a = []
	for (let i = 0; i < root_a.length; i++) {
		const x = root_a[i]
		if (!rest_set.has(x)) set_member_a.push(x)
	}
	return new Set(set_member_a)
}
export {
	difference_set_ as set_difference_,
	difference_set_ as _difference__set,
}
