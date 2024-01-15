import type { wrap_aa_T } from '../wrap_aa/index.js'
export declare type wrap_aa_item_T<I> =
	wrap_aa_T<I> extends readonly (infer O)[][]
		? O
		: never
export declare type wrapA2ItemT<I> = wrap_aa_item_T<I>
