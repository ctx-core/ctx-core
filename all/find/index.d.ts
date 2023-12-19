import type { wrap_a_T2 } from '../wrap_a/index.js'
/**
 * Returns first item in `a` where `fn(a[idx], idx)` is truthy.
 */
export declare function find<In>(
	a:wrap_a_T2<In>,
	fn:(val:In, idx:number)=>unknown
):In|undefined
export declare function maybe_find<In, Or = null>(
	maybe_a:wrap_a_T2<In>,
	fn:(val:In, idx:number)=>unknown,
	or?:Or
):In|Or
/**
 * Returns function that returns value from [find](#find) with `fn` argument.
 */
export declare function find_<I>(
	fn:(val:I, idx:number)=>I
):(a:readonly I[])=>I|undefined
export declare function maybe_find_<I>(
	fn:(val:I, idx:number)=>I
):(maybe_a:wrap_a_T2<I>)=>I|undefined
export {
	find_ as _find,
	maybe_find_ as _maybe_find,
}
