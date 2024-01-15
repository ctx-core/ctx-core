import type { wrap_a_T2 } from '../wrap_a/index.js'
/**
 * Flattens the a & it's children into an array without chunks
 */
export declare function flatten<I>(a:wrap_a_T2<I>):I[]
export declare function maybe_flatten<I, Or = null>(
	in_a:wrap_a_T2<I>,
	or?:Or
):I[]|Or
export { flatten as flatten__a1, }
