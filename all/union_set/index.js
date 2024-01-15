import { wrap_a_ } from '../wrap_a/index.js'
/**
 * Returns a `set` with the union of the members
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export function union_set_(member_a_nowrap_a_nowrap) {
	const member_a_nowrap_a = wrap_a_(member_a_nowrap_a_nowrap)
	let set_member_a = []
	for (let i = 0; i < member_a_nowrap_a.length; i++) {
		const member_a = wrap_a_(member_a_nowrap_a[i])
		set_member_a.push(...member_a)
	}
	return new Set(set_member_a)
}
export {
	union_set_ as set_union_fn,
	union_set_ as _union__set,
}
