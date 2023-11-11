export declare type set_member_T<
	I extends Set<unknown>
> = I extends Set<infer O> ? O : never
export declare type set_member_type<
	I extends Set<unknown>
> = set_member_T<I>
