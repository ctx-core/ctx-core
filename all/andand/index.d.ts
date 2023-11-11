/**
 * Applies `&&` to a chain of properties from `obj`.
 */
export declare function andand<
	Val extends unknown = unknown,
	Out extends unknown = unknown
>(obj:Val, ...name_a:andand_key_T<Val>[]):Out|null
export declare type andand_key_T<
	Val extends unknown = unknown
> = keyof Val|andand_key__T<Val>
export declare type andand_key__T<
	Val extends unknown = unknown
> = (val:Val)=>keyof Val
export declare type andand_key_fn_T = andand_key__T
