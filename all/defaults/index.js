import { clone } from '../clone/index.js'
/**
 * Returns the obj with default values. If `obj[key] == null`, use `default[key]`
 * @param {object}obj
 * @param {unknown}defaults_a
 * @returns {unknown}
 */
export function defaults(obj, ...defaults_a) {
	const defaults1 = clone(...defaults_a)
	for (let key in obj) {
		if (obj[key] == null) obj[key] = defaults1[key]
	}
	return obj
}
