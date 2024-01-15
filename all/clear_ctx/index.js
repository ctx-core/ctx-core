/**
 * Returns obj with keys in `key_a` having `clear_value`.
 * @param {string[]}key_a
 * @param {unknown}clear_value
 * @returns {object}
 * @private
 */
export function clear_ctx_(key_a, clear_value) {
	const clear_ctx = {}
	for (let i = 0; i < key_a.length; i++) {
		const key = key_a[i]
		clear_ctx[key] = clear_value
	}
	return clear_ctx
}
export {
	clear_ctx_ as _clear_ctx,
	clear_ctx_ as _ctx__clear,
}
