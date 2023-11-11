/**
 * Returns array with the index as each item.
 */
export declare function times<
	I extends unknown = unknown
>(
	num:number, fn:(idx:number)=>I
):I[]
