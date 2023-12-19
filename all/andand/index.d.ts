/**
 * Applies `&&` to a chain of properties from `obj`.
 */
export declare function andand<Val, Out>(obj:Val, ...name_a:andand_key_T<Val>[]):Out|null
export declare type andand_key_T<Val> = keyof Val|andand_key__T<Val>
export declare type andand_key__T<Val> = (val:Val)=>keyof Val
export declare type andand_key_fn_T = andand_key__T
