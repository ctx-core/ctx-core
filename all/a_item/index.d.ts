export declare type a_item_T<
	I extends unknown = unknown
> =
	I extends readonly (infer O)[]
		? O
		: I
export declare type a1_item_type<
	I extends unknown = unknown
> = a_item_T<I>
export declare type a1_item_T<
	I extends unknown = unknown
> = a_item_T<I>
