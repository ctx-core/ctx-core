import { keys } from '../keys/index.js'
const no_key_arg_symbol = Symbol('no_key_arg')
/**
 * Returns true if obj has given in_key; false otherwise.
 * If no in_key given, returns true if obj has any in_key; false otherwise.
 * @param {object}obj
 * @param {symbol}[in_key]
 * @returns {boolean}
 */
export function has_key(obj, in_key = no_key_arg_symbol) {
	if (in_key === no_key_arg_symbol) {
		for (let _ in obj) {
			return true
		}
	} else {
		for (let key in obj) {
			if (in_key.toString() === key.toString()) return true
		}
	}
	return false
}
export { has_key as has__key }
/**
 * If a key is given, returns boolean of indicitating if the given key is a member of the obj.
 * If no key is given, returns boolean of indicitating if the obj has any key.
 * @param {object}obj
 * @param {boolean}[in_key]
 * @returns {boolean}
 * @private
 */
export function has_key_(obj, in_key) {
	const $keys = keys(obj)
	return in_key ? !!~$keys.indexOf(in_key) : !!$keys.length
}
export {
	has_key_ as _has_key,
	has_key_ as _has__key,
}
