import type { append_current_T, resolver_curry_T } from '../resolver_curry/index.js'
export declare function flip<ResolverArg>(
	append:append_current_T<ResolverArg>
):resolver_curry_T<ResolverArg>
export { flip as curry__flip }
