export declare type a_item_T<I> =
	I extends readonly (infer O)[]
		? O
		: I
export declare type a1_item_type<I> = a_item_T<I>
export declare type a1_item_T<I> = a_item_T<I>
