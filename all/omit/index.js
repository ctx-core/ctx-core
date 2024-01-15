/**
 * New `obj` without `key_a` keys.
 * @param {object}obj
 * @param {string}key_a
 * @returns {object|undefined}
 */
export function omit(obj, ...key_a) {
	if (!obj) return
	let memo = {}
	for (const key in obj) {
		if (!~key_a.indexOf(key)) {
			memo[key] = obj[key]
		}
	}
	return memo
}
/**
 * Returns a function that calls [omit](#omit) with the given `...in_key_a`
 * @param {string}in_key_a
 * @returns {(obj:object, ...fn_key_a:string[])=>object|undefined}
 * @private
 */
export function omit_(...in_key_a) {
	return (obj, ...fn_key_a)=>omit(obj, ...in_key_a, ...fn_key_a)
}
export { omit_ as _omit, }
