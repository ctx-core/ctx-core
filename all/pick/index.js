/**
 * New `obj` with only `key_a` keys.
 * @param {object}obj
 * @param {string}key_a
 * @returns {object}
 */
export function pick(obj, ...key_a) {
	const memo = {}
	for (let i = 0; i < key_a.length; i++) {
		const key = key_a[i]
		if (key in obj) {
			memo[key] = obj[key]
		}
	}
	return memo
}
/**
 * @param {object}obj
 * @param {string}key_a
 * @returns {object|unknown}
 */
export function maybe_pick(obj, ...key_a) {
	if (!obj) return
	return pick(obj, ...key_a)
}
/**
 * Returns a function that calls [pick](#pick) with the given `...in_key_a`
 * @param {string}in_key_a
 * @returns {(obj:object, ...fn_key_a:string[])=>object}
 * @private
 */
export function pick_(...in_key_a) {
	return (obj, ...fn_key_a)=>pick(obj, ...in_key_a, ...fn_key_a)
}
export { pick_ as _pick, }
