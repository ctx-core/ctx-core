/**
 * Invokes interceptor with the obj, and then returns the object.
 * The primary purpose of this method is to "tap into" a method chain,
 * to perform operations on intermediate results within the chain.
 * @see {@link https://underscorejs.org/#tap}
 */
export declare function tap<
	Obj extends unknown = unknown
>(
	obj:Obj, interceptor:tap__interceptor_T<Obj>
):Obj
export declare type tap__interceptor_T<T = unknown> = (obj:T)=>void
export declare type tap_interceptor_T<T = unknown> = tap__interceptor_T<T>
/**
 * Returns function that calls tap with obj.
 */
export declare function tap_<
	Val = unknown
>(
	fn:tap__interceptor_T<Val>
):(val:Val)=>Val
export { tap_ as _tap, }
