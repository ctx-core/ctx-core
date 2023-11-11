/** @typedef {import('../wrap_a/index.d.ts').wrap_a_T2} */
/**
 * Returns first return value of `fn(a[idx], idx)` where `fn(a[idx], idx)` is truthy.
 * @param {wrap_a_T2}a
 * @param {(val:unknown, idx:number)=>unknown}fn
 * @returns {unknown}
 */
export function map_find(a, fn) {
	for (let idx = 0; idx < a.length; idx++) {
		const val = a[idx]
		const map_value = fn(val, idx)
		if (map_value) return map_value
	}
	return
}
/**
 * @param {wrap_a_T2}maybe_a
 * @param {(val:unknown, idx:number)=>unknown}fn
 * @param {unknown}or
 * @returns {unknown}
 */
export function maybe_map_find(maybe_a, fn, or = null) {
	if (!maybe_a) return or
	return map_find(maybe_a, fn)
}
export { map_find as find__map, }
/**
 * Returns function that returns value from [map_find](#map_find) with `fn` argument.
 * @param {(val:unknown, idx:number)=>unknown}fn
 * @returns {(a:wrap_a_T2)=>unknown}
 */
export function map_find_(fn) {
	return (a)=>map_find(a, fn)
}
export {
	map_find_ as _map_find,
	map_find_ as _find__map,
}
