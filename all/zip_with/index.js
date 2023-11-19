/** @typedef {import('../zip_with/index.d.ts').zip_with_fn_T} */
/**
 * Returns 2d Array where each item being the return value of `fn` given the index value for each Array in `wrap_aa_T`.
 * @param {unknown[][]}aa
 * @param {zip_with_fn_T}[fn]
 * @returns {unknown[][]}
 */
export function zip_with(aa, fn) {
	if (!fn) fn = default_zip_with_2()
	const a = aa[0]
	const rest_aa = aa.slice(1)
	const zip_with_aa = []
	for (let i = 0; i < a.length; i++) {
		const arg_a = [
			a[i]
		]
		for (let j = 0; j < rest_aa.length; j++) {
			arg_a.push(rest_aa[j][i])
		}
		zip_with_aa.push(fn.call(zip_with_aa, arg_a, i))
	}
	return zip_with_aa
}
/**
 * @param {unknown[][]}a2
 * @param {zip_with_fn_T}[fn]
 * @param {unknown[][]|null|undefined}[or]
 * @returns {unknown[][]|null|undefined}
 */
export function maybe_zip_with(a2, fn, or = null) {
	if (!a2) return or
	return zip_with(a2, fn)
}
/**
 * @returns {(a:unknown[], i:number)=>unknown[]}
 */
export function default_zip_with_2() {
	return (a, _i)=>a
}
export {
	zip_with as zipWith,
	maybe_zip_with as maybe_zipWith,
}
/**
 * Returns a function that returns [zipWith](#zipWith) with `fn` argument.
 * @param {zip_with_fn_T}fn
 * @returns {(...a2:unknown[][])=>unknown[][|undefined]}
 */
export function zip_with_(fn) {
	return (...a2)=>zip_with(a2, fn)
}
export {
	zip_with_ as _zip_with,
	zip_with_ as _zipWith,
	zip_with_ as _fn__zipWith,
}
