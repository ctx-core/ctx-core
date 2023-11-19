/** @typedef {import('../index.d.ts').map_fn_T} */
/**
 * Map return value of `fn(a[], i)` into an Array.
 * @param {unknown[]}a
 * @param {map_fn_T}fn
 * @returns {unknown[]}
 */
export function map(a, fn) {
	const out_a = []
	for (let i = 0; i < a.length; i++) {
		out_a.push(fn(a[i], i))
	}
	return out_a
}
/**
 * @param {unknown[]|undefined}maybe_a
 * @param {fnmap_fn_T}fn
 * @param {unknown[]|null|undefined}or
 * @returns {unknown[]|null|undefined}
 */
export function maybe_map(maybe_a, fn, or = null) {
	if (!maybe_a) return or
	return maybe_a?.map(fn)
}
/**
 * Returns Function returning [map](#map) with `fn`.
 * @param {(val:unknown, idx:number)=>unknown}fn
 * @returns {(a:unknown[])=>unknown[]}
 */
export function map_(fn) {
	return a=>a.map(fn)
}
/**
 * @param {(val:unknown, idx:number)=>unknown}fn
 * @param {unknown[]|null|undefined}or
 * @returns {(a:unknown[]|undefined)=>unknown[]|null|undefined}
 */
export function maybe_map_(fn, or = null) {
	return a=>a ? a.map(fn) : or
}
export {
	map_ as _map,
	map_ as _fn__map,
	maybe_map_ as _maybe_map,
}
