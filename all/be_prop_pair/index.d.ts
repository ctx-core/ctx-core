import type { be__params_T, Ctx } from '../be_/index.js'
export declare function be_prop_pair_<
	Val extends NonNullable<unknown>,
	ctx_T extends Ctx = Ctx
>(
	be__params?:be__params_T
):be_prop_pair_T<Val, ctx_T>
export declare function be_prop_pair_<
	Val extends NonNullable<unknown>,
	ctx_T extends Ctx = Ctx
>(
	id:string|null|undefined,
	be__params?:be__params_T
):be_prop_pair_T<Val, ctx_T>
export declare function be_prop_pair_<
	Val extends NonNullable<unknown>,
	ctx_T extends Ctx = Ctx
>(
	val__new:(ctx:ctx_T)=>Val,
	be__params?:be__params_T
):be_prop_pair_T<Val, ctx_T>
export declare function be_prop_pair_<
	Val extends NonNullable<unknown>,
	ctx_T extends Ctx = Ctx
>(
	id?:string|null|undefined,
	val__new?:((ctx:ctx_T)=>Val),
	be__params?:be__params_T
):be_prop_pair_T<Val, ctx_T>
export type be_prop_pair_T<
	Val extends NonNullable<unknown>,
	ctx_T extends Ctx = Ctx
> = [
	(ctx:ctx_T)=>Val,
	(ctx:ctx_T, val:Val)=>void
]
