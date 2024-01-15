/**
 * @param {object|ArrayLike}obj
 * @returns {Generator<[string, unknown]}
 * @private
 */
export function* entries_gen_(obj) {
	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			yield [key, obj[key]]
		}
	}
}
