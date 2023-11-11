/**
 * Calls setTimeout
 */
export declare function tick<
	Out extends unknown = unknown
>(
	fn?:()=>Out, timeout?:number
):Promise<Out|undefined>
