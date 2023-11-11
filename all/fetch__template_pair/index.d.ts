import type { response_pair_T } from '../response_pair/index.js'
export declare function fetch__template_pair__new<
	F extends ((...arg_a:any[])=>Promise<Response>)|any[],
	U = unknown,
	H = U,
>(
	fetch_fn:
		F extends (...arg_a:any[])=>Promise<Response>
			? F
			: F extends any[]
				? (...arg_a:F)=>Promise<Response>
				: never,
	hydrate?:(dehydrated_val:U)=>H
):fetch__template_pair_T<F, H>
export type fetch__template_pair_T<
	F extends ((...arg_a:any[])=>Promise<Response>)|any[],
	T = unknown,
> = [
	fetch__template_pair_0_T<F>,
	fetch__template_pair_1_T<F, T>
]
export type fetch__template_pair_0_T<
	F extends ((...arg_a:any[])=>Promise<Response>)|any[]
> =
	F extends (...arg_a:any[])=>Promise<Response>
		? F
		: F extends any[]
			? (...arg_a:F)=>Promise<Response>
			: never
export type fetch__template_pair_1_T<
	F extends ((...arg_a:any[])=>Promise<Response>)|any[],
	T = unknown,
> = (
	...arg_a:
		F extends (...arg_a:any[])=>Promise<Response>
			? Parameters<F>
			: F extends any[]
				? F
				: never
)=>Promise<response_pair_T<T>>
