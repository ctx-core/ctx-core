/**
 * Sets val values to false when `== null`.
 * @param {unknown}val
 * @param {string}key_a
 * @returns {unknown}
 */
export function if_null_set_false(val, ...key_a) {
	for (let i = 0; i < key_a.length; i++) {
		const key = key_a[i]
		if (val[key] == null) val[key] = false
	}
	return val
}
export { if_null_set_false as set__false__if__null }
