/**
 * Returns an array of objects with [pick](#pick) applied.
 * @param {object}obj
 * @param {string}key_a
 * @returns {unknown[]|undefined}
 * @private
 */
export function pick_val_a_(obj, ...key_a) {
	if (!obj) return
	const val_a = []
	for (let i = 0; i < key_a.length; i++) {
		const key = key_a[i]
		const val = obj[key]
		val_a.push(val)
	}
	return val_a
}
export {
	pick_val_a_ as pick_value_a_,
	pick_val_a_ as _pick_value_a1,
	pick_val_a_ as _a1__value__pick,
}
