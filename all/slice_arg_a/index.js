import { wrap_a_ } from '../wrap_a/index.js'
/**
 * Returns a function where the arguments to the wrapped function are sliced with begin_idx & end_idx.
 * @param {import('../slice_arg_a/index.js').slice_arg_a_fn_T}fn
 * @param {number}[begin_idx]
 * @param {number}[end_idx]
 * @returns {import('../slice_arg_a/index.js').slice_arg_a_T}
 */
export function slice_arg_a_(fn, begin_idx, end_idx) {
	return (arg_a)=>fn(wrap_a_(arg_a).slice(begin_idx, end_idx))
}
export {
	slice_arg_a_ as slice_arg_a1_fn,
	slice_arg_a_ as _slice_arg_a1,
	slice_arg_a_ as _arg_a1__slice,
	slice_arg_a_ as _a1__arg__slice,
}
