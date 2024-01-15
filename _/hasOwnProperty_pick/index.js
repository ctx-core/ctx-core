/**
 * Returns object with picked values,
 * not including inherited property values (i.e. if hasOwnProperty is false).
 * @param {unknown}val
 * @param {string}key_a
 * @returns {unknown}}
 */
export function hasOwnProperty_pick(val, ...key_a) {
	if (!val) return
	let memo = {}
	for (let i = 0; i < key_a.length; i++) {
		const key = key_a[i]
		if (val.hasOwnProperty(key)) memo[key] = val[key]
	}
	return memo
}
export { hasOwnProperty_pick as pick__hasOwnProperty }
