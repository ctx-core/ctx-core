import type { wrap_a_T } from '../wrap_a/index.js'
export declare type wrap_a_item_T<I> =
	wrap_a_T<I> extends readonly (infer O)[][]
		? O
		: never
export declare type wrap_a1_item_type<I> = wrap_a_item_T<I>
