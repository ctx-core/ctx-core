/// <reference types="../compose/index.d.ts" />
/**
 * Composes fn_a into a single function
 *
 * @param {compose_fn_T}fn_a
 * @returns {compose_fn_T}
 * @see {@link https://gist.github.com/JamieMason/172460a36a0eaef24233e6edb2706f83}
 */
export function compose(...fn_a) {
	return (
		fn_a.reduceRight((prev_fn, next_fn)=>
			(...arg_a)=>
				next_fn(
					prev_fn(...arg_a)),
		$=>$)
	)
}
