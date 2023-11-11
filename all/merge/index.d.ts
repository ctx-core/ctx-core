/**
 * Performs a deep merge on the target with each source_a
 */
export declare function merge<
	I extends unknown = unknown,
	O = I
>(target:I, ...source_a:O[]):I|undefined
