/**
 * Returns true when some of the key/value pairs cause the fn to be truthy.
 * @param {object}obj
 * @param {(obj:unknown, key:string)=>unknown}compare_some
 * @returns {boolean|undefined}
 * @example
 * some({foo: 9, bar: 10}, (value, key) => value === 10) // returns true
 * some({baz: 11, quux: 12}, (value, key) => value === 10) // returns false
 */
export function o_some(obj, compare_some) {
	if (!obj) return
	for (let key in obj) {
		if (compare_some(obj[key], key)) return true
	}
	return false
}
