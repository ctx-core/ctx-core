import { keys } from '../keys/index.js'
import { unpick } from '../unpick/index.js'
/**
 * Does not include keys on `keys_obj` from `obj`
 * @param {object}obj
 * @param {object}keys_obj
 * @returns {object}
 */
export function unpick_keys(obj, keys_obj) {
	return unpick(obj, ...keys(keys_obj))
}
export { unpick_keys as unpick__keys }
