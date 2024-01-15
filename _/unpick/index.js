import { assign } from '../assign/index.js'
import { keys } from '../keys/index.js'
/**
 * Does not include `key_a` from `obj`
 * @param {object}obj
 * @param {string}key_a
 * @returns {object}
 */
export function unpick(obj, ...key_a) {
	const memo = {}
	const obj_key_a = keys(obj)
	for (let i = 0; i < obj_key_a.length; i++) {
		const key = obj_key_a[i]
		if (key_a.indexOf(key) === -1) assign(memo, {
			[key]: obj[key]
		})
	}
	return memo
}
/**
 * @param {object}obj
 * @param {string}key_a
 * @returns {object|undefined}
 */
export function maybe_unpick(obj, ...key_a) {
	if (!obj) return
	return unpick(obj, ...key_a)
}
