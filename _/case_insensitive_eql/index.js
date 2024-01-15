import { wrap_a_ } from '../wrap_a/index.js'
/**
 * @param {string[]}a_unwrap
 * @returns {boolean}
 */
export function case_insensitive_eql(a_unwrap) {
	const value_a = wrap_a_(a_unwrap)
	let current_value = value_a[0]?.toString()?.toLowerCase()
	for (let i = 1; i < value_a.length; i++) {
		const value = value_a[i]?.toString()?.toLowerCase()
		if (current_value !== value) return false
	}
	return true
}
