import type { append_current_T, resolver_curry_T } from '../resolver_curry/index.js'
export declare function curry<
	ResolverArg extends unknown = unknown
>(append:append_current_T<ResolverArg>):resolver_curry_T<ResolverArg>
/**
 * @param append
 * @returns {function(*=): *}
 * @see {@link https://medium.com/@kevincennis/currying-in-javascript-c66080543528}
 */
export declare function curry_<
	ResolverArg extends unknown = unknown
>(
	append:append_current_T<ResolverArg>
):(fn:Function)=>resolver_curry_T<ResolverArg>
