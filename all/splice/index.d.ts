/**
 * Calls splice on a
 */
export declare function splice<
	I extends unknown = unknown, O extends unknown = readonly I[]
>(
	a:readonly I[],
	start:number,
	delete_count?:number,
	...arg_a:readonly I[]
):O
export declare function maybe_splice<
	I extends unknown = unknown, O extends unknown = readonly I[]
>(
	maybe_a:readonly I[]|undefined,
	start:number,
	delete_count?:number,
	...arg_a:readonly I[]
):O|undefined
