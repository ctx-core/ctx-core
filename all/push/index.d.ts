/**
 * Calls push on an array
 */
export declare function push<
	I extends unknown = unknown
>(
	a:readonly I[],
	...arg_a:readonly I[]
):number
export declare function maybe_push<
	I extends unknown = unknown
>(
	maybe_a:readonly I[]|undefined,
	...arg_a:readonly I[]
):number|undefined
