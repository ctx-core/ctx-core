/**
 * Returns true if some `predicate(value)` is truthy
 * @param {unknown[]}a
 * @param {(val:unknown, index:number, a:unknown[])=>unknown}predicate
 * @returns {boolean}
 */
export function a_some(a, predicate) {
	let index = -1
	const length = a.length
	while (++index < length) {
		if (predicate(a[index], index, a)) {
			return true
		}
	}
	return false
}
export {
	a_some as some_a1,
	a_some as some__a1,
}
