/**
 * Ensures that the keys in `rest_ctx_a` are added to val
 *   only if the key is not defined on val (== null).
 * The order of precedence is from left to right.
 * @example
 * val = {baz: 99}
 * ensure(val, {foo: 1, baz: 4}, {foo: 2, bar: 3}) // {baz:99, foo: 1, bar: 3}
 */
export declare function ensure<
	I extends unknown = unknown
>(val:I, ...rest_ctx_a:Partial<I>[]):I|undefined
