/**
 * Returns true if some `predicate(value)` is truthy
 */
export declare function a_some<Val, POut>(
	a:readonly Val[],
	predicate:(val:Val, index:number, a:readonly Val[])=>POut
):boolean
export {
	a_some as some_a1,
	a_some as some__a1,
}
