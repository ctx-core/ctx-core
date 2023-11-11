/**
 * Reverses the order of items in `in_a` by mutating `in_a`.
 */
export declare function reverse<
	I extends unknown = unknown, O extends unknown = readonly I[]
>(
	in_a:readonly I[]
):O
export declare function maybe_reverse<
	I extends unknown = unknown,
	O extends unknown = readonly I[],
	Or = null
>(
	maybe_a:readonly I[]|undefined,
	or?:Or
):O|Or
