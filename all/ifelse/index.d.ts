/**
 * Returns `if_fn(conditional)` if `conditional` else `else_fn(conditional)`
 */
export declare function ifelse<
	T extends unknown = unknown, I = T, E = I
>(conditional:T, if_:(conditional:T)=>I, else_:(conditional:T)=>E):I|E
