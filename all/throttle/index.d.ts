/**
 * @see {@link https://remysharp.com/2010/07/21/throttling-function-calls}
 */
export declare function throttle<
	F extends Function,
	This extends unknown
>(
	fn:F, threshold?:number, scope?:unknown
):(this:This)=>void
