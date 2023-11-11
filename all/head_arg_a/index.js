import { slice_arg_a_ } from '../slice_arg_a/index.js'
/**
 * Returns a function where the first `count` arguments are sent to the wrapped function.
 * @param {import('../slice_arg_a/index.js').slice_arg_a_fn_T}fn
 * @param {number}[count]
 * @returns {import('../slice_arg_a_/index.js').slice_arg_a_T}
 */
export function head_arg_a_(fn, count = 1) {
	return slice_arg_a_(fn, 0, count)
}
export {
	head_arg_a_ as head_arg_a1_fn,
	head_arg_a_ as _head_arg_a1,
	head_arg_a_ as _arg_a1__head,
}
