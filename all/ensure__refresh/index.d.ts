/**
 * `ensure` `obj[key]` is present or call `ensure(obj)`. Then call `refresh(obj, obj[key])`.
 */
export declare function ensure__refresh<
	I extends unknown = unknown
>(
	obj:ensure_refresh__o_T<I>,
	...refresh_ctx_a:ensure__refresh_opts_T<I>[]
):I|undefined
export {
	ensure__refresh as ensure_refresh,
}
export interface ensure__refresh_opts_T<T> {
	key:string
	ensure:(obj:ensure_refresh__o_T<T>)=>T
	refresh:(obj:ensure_refresh__o_T<T>, val:T)=>void
}
export declare type refresh_ctx_T<T> = ensure__refresh_opts_T<T>
export declare type ensure_refresh__o_T<T> = Record<string, T>
export declare type ensure_refresh_obj_type<T> = ensure_refresh__o_T<T>
