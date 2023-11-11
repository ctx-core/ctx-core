/**
 * Returns a function that calls fn passing the arguments sliced by slice_arg_a.
 * @param {import('../slice_arg_spread_a/index.js').slice_arg_spread_a__arg__T}fn
 * @param {number}[begin_idx]
 * @param {number}[end_idx]
 * @returns {import('../slice_arg_spread_a/index.js').slice_arg_spread_a___ret_T}
 */
export function slice_arg_spread_a_(fn, begin_idx, end_idx) {
	return (...arg_a)=>fn(arg_a.slice(begin_idx, end_idx))
}
export {
	slice_arg_spread_a_ as slice_arg_spread_a,
	slice_arg_spread_a_ as slice_arg_a1,
	slice_arg_spread_a_ as slice__a1__arg,
}
