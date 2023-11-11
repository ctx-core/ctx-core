export type resolver_curry_T<ResolverArg extends unknown = unknown> = (
	...resolver_arg_a:ResolverArg[]
)=>resolver_curry_T<ResolverArg>
export type append_current_T<ResolverArg extends unknown = unknown> = (
	local:ResolverArg[], arg_a:ResolverArg[]
)=>any
