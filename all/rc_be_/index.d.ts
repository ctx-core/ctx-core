import type { Be, be__val__new_T, be_params_T, Ctx } from '../be_/index.js'
export declare const be_m_set_key:unique symbol
/**
 * Returns _be with referencing counting.
 * When all unsubscribes have been called, the ctx[key] is deleted.
 */
export declare function rc_be_<
	Out extends NonNullable<unknown>
>(val__new:rc_be__val__new_T<Out>):rc_be__return_T<Out>
export declare type rc_be__return_T<
	Out extends NonNullable<unknown>
> = (ctx:Ctx, params?:rc_be_params_T)=>RcBe_return_T<Out>
export {
	rc_be_ as _rc_be,
	rc_be_ as _rc_b,
}
export declare type be_m_set_T<
	Out extends NonNullable<unknown>
> = Map<Be<Out>, Set<any>>
export declare type val_this_on_destroy_T = (...destroy_a:rc_be_destroy_T[])=>void
export interface val_this_T {
	on_destroy:val_this_on_destroy_T
	onDestroy:val_this_on_destroy_T
}
export interface rc_be_params_T extends be_params_T {
	owner?:object
}
export declare type rc_be__val__new_T<
	Out extends NonNullable<unknown>
> = be__val__new_T<Out>&((this:val_this_T, ctx:Ctx, key:Be<Out>, opts?:rc_be_params_T)=>Out)
export declare type rc_be_destroy_T = ()=>void
export interface RcBe_return_T<Out extends unknown = unknown> {
	value:Out
	destroy:rc_be_destroy_T
}
export declare type RcBe<
	Out extends NonNullable<unknown>
> = (ctx:Ctx, opts?:be_params_T)=>RcBe_return_T<Out>
export declare type RcB<Out extends NonNullable<unknown>> = RcBe<Out>
