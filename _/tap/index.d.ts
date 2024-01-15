/**
 * Invokes interceptor with the val, and then returns the object.
 * The primary purpose of this method is to "tap into" a method chain,
 * to perform operations on intermediate results within the chain.
 * @see {@link https://underscorejs.org/#tap}
 */
export declare function tap<V>(
	val:V, interceptor:tap__interceptor_T<V>
):V
export declare type tap__interceptor_T<V = unknown> = (Val:V)=>void
export declare type tap_interceptor_T<V = unknown> = tap__interceptor_T<V>
/**
 * Returns function that calls tap with obj.
 */
export declare function tap_<V = unknown>(
	fn:tap__interceptor_T<V>
):(val:V)=>V
export { tap_ as _tap, }
