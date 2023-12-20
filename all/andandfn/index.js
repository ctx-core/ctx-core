/// <reference types="../andand/index.d.ts" />
/// <reference types="../andandfn/index.d.ts" />
/**
 * Applies `&&` to a chain of property name or function with return value from `obj`.
 * @param {unknown}obj
 * @param {andand_key_T}name_a
 * @returns {unknown}
 */
export function andandfn(obj, ...name_a) {
	let out_value = obj
	for (let i = 0; i < name_a.length; i++) {
		if (!out_value) break
		const segment = name_a[i]
		let in_value =
			out_value
				? out_value[segment]
				: typeof segment === 'function'
					? segment(out_value)
					: undefined
		out_value =
			in_value && typeof in_value === 'function'
				? in_value.call(out_value)
				: in_value
	}
	return out_value
}
export { andandfn as andand__fn, }
/** @typedef {andand_key_T} */
/**
 * Returns a function that calls `andand_(obj, ...name_a)`
 * @param {andand_key_T}name_a
 * @returns {andandfn_T}
 */
export function andandfn_(...name_a) {
	return (obj)=>andandfn(obj, ...name_a)
}
export {
	andandfn_ as _andand_,
	andandfn_ as _fn__andand__fn,
}
