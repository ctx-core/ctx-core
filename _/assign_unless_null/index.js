import { assign } from '../assign/index.js'
/**
 * Assign only if obj is not null
 * @param {object}obj
 * @param {unknown}arg_a
 * @returns {object|undefined}
 */
export function assign_unless_null(obj, ...arg_a) {
	return obj == undefined ? undefined : assign(obj, ...arg_a)
}
export { assign_unless_null as assign__unless__null }
