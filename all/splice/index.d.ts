/**
 * Calls splice on a
 */
export declare function splice<I, O extends unknown[] = I[]>(
	a:readonly I[],
	start:number,
	delete_count?:number,
	...arg_a:readonly I[]
):O
export declare function maybe_splice<I, O extends unknown[] = I[]>(
	maybe_a:readonly I[]|undefined,
	start:number,
	delete_count?:number,
	...arg_a:readonly I[]
):O|undefined
