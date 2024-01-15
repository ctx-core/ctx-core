/**
 * Insert `...item_a` into `a` at position `idx`.
 */
export declare function insert<
	A extends readonly unknown[] = readonly unknown[]
>(a:A, idx:number, ...item_a:A):A
