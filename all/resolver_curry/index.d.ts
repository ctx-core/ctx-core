export type resolver_curry_T<ResolverArg> = (
	...resolver_arg_a:ResolverArg[]
)=>resolver_curry_T<ResolverArg>
export type append_current_T<ResolverArg> = (
	local:ResolverArg[], arg_a:ResolverArg[]
)=>any
