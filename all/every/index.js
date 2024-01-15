/**
 * Returns true if every `predicate(value)` is truthy
 * @param {unknown[]}a
 * @param {(item:unknown, idx:number, a:unknown[])=>boolean}predicate
 * @returns {boolean}
 */
export function every(a, predicate) {
	let idx = -1
	const length = a.length
	while (++idx < length) {
		if (!predicate(a[idx], idx, a)) {
			return false
		}
	}
	return true
}
export {
	every as every_a1,
	every as every__a1,
}
/**
 * @param maybe_a{unknown[]|undefined}
 * @param predicate{(item:unknown, idx:number, a:unknown[])=>boolean}
 * @param or{boolean|null|unknown}
 * @returns {boolean|null|unknown}
 */
export function maybe_every(maybe_a, predicate, or = null) {
	if (!maybe_a) return or
	return every(maybe_a, predicate)
}
/**
 * Returns a function that returns from [every](#every) with the given `predicate` function.
 * @param predicate{(item:unknown, idx:number, a:unknown[])=>boolean}
 * @returns {(a:unknown[])=>boolean}
 */
export function every_(predicate) {
	return a=>every(a, predicate)
}
export {
	every_ as _every,
	every_ as _every_fn,
	every_ as _fn__every,
}
