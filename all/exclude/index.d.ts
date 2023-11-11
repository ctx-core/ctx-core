/**
 * Exclude keys from obj
 */
export declare function exclude<
	I extends unknown = unknown,
	O = I
>(obj:I, ...key_a:string[]):O|undefined
