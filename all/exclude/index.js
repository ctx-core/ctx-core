/**
 * Exclude keys from obj
 * @param {unknown}obj
 * @param {string}key_
 * @returns {unknown}
 */
export function exclude(obj, ...key_) {
	if (!obj) return
	const out = {}
	const exclude1 = new Set(key_)
	for (let key in obj) {
		if (!exclude1.has(key)) {
			out[key] = obj[key]
		}
	}
	return out
}
