import type { wrap_aa_T } from '../wrap_aa/index.js'
export declare type wrap_aa_item_T<
	I extends unknown = unknown
> = wrap_aa_T<I> extends readonly (infer O)[][] ? O : never
export declare type wrapA2ItemT = wrap_aa_item_T
