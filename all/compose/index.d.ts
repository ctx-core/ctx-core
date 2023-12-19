/**
 * Composes fn_a into a single function
 * @see {@link https://gist.github.com/JamieMason/172460a36a0eaef24233e6edb2706f83}
 */
export declare function compose<O>(
	...fn_a:compose_fn_T<O>[]
):compose_fn_T<O>
export declare type compose_fn_T<O> =
	(...fn_a:unknown[])=>O
