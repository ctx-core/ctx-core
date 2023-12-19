/**
 * Remove each `...item_a` from `a`.
 */
export declare function remove<I, O = readonly I[]>(
	a:readonly I[],
	...item_a:readonly I[]
):O
export declare function maybe_remove<I, O = readonly I[]>(
	maybe_a:readonly I[]|undefined,
	...item_a:readonly I[]
):O|undefined
export { remove as remove__a1, }
