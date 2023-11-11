/**
 * Returns first obj property that is truthy
 */
export declare function or_property<
	I extends unknown = unknown
>(
	obj:I, name_a:string[]
):I[keyof I]|undefined
export { or_property as or__property }
