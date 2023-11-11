import { wrap_a_ } from '../wrap_a/index.js'
/**
 * Returns a `set` with the intersection of the members
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export function intersection_set_(member_a_nowrap_a_nowrap) {
	const member_a_nowrap_a = wrap_a_(member_a_nowrap_a_nowrap)
	const root_a_nowrap = member_a_nowrap_a[0]
	const rest_a_nowrap_a = member_a_nowrap_a.slice(1)
	const root_a = wrap_a_(root_a_nowrap)
	const member_set = new Set(root_a)
	for (let i = 0; i < rest_a_nowrap_a.length; i++) {
		const rest_a_nowrap = rest_a_nowrap_a[i]
		const rest_a = wrap_a_(rest_a_nowrap)
		const current_set = new Set(rest_a)
		member_set.forEach((member)=>{
			if (!current_set.has(member)) member_set.delete(member)
		})
	}
	return member_set
}
export {
	intersection_set_ as set_intersection_fn,
	intersection_set_ as _intersection__set,
}
