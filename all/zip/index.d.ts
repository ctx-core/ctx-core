/**
 * Returns 2d Array of each item being the index value for each Array in `...a2`.
 */
export declare function zip<
	I extends readonly unknown[][] = readonly unknown[][],
	O extends readonly unknown[][] = readonly I[number][number][][]
>(a2:I):O
export declare function maybe_zip<
	I extends unknown[][] = unknown[][],
	O extends unknown[][] = I[number][number][][]
>(a2:I|undefined):O|undefined
