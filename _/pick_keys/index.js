import { keys } from '../keys/index.js'
import { pick } from '../pick/index.js'
/**
 * Picks the keys on `in_key_obj` from `obj`
 * @param {object}obj
 * @param {object}in_key_obj
 * @returns {object}
 */
export function pick_keys(obj, in_key_obj) {
	return pick(obj, ...keys(in_key_obj))
}
export { pick_keys as pick__keys }
