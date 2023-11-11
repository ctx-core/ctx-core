import type { wrap_a_T2 } from '../wrap_a/index.js'
/**
 * Returns first item in `a` where `fn(a[idx], idx)` is truthy.
 */
export declare function find<
	In extends unknown = unknown
>(
	a:wrap_a_T2<In>,
	fn:(val:In, idx:number)=>any
):In|undefined
export declare function maybe_find<
	In extends unknown = unknown, Or = null
>(
	maybe_a:wrap_a_T2<In>,
	fn:(val:In, idx:number)=>any,
	or?:Or
):In|Or
/**
 * Returns function that returns value from [find](#find) with `fn` argument.
 */
export declare function find_<I extends unknown = unknown>(
	fn:(val:I, idx:number)=>I
):(a:readonly I[])=>I|undefined
export declare function maybe_find_<I extends unknown = unknown>(
	fn:(val:I, idx:number)=>I
):(maybe_a:wrap_a_T2<I>)=>I|undefined
export {
	find_ as _find,
	maybe_find_ as _maybe_find,
}
