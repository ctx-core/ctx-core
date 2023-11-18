import type { Be, be__params_T, Ctx } from '../be_/index.js'
export declare function val__be_rmemo_pair_<
	val_T,
	ctx_T extends Ctx = Ctx
>(
	val__new:(ctx:ctx_T)=>val_T,
	be__params?:be__params_T
):val__be_rmemo_pair_T<val_T, ctx_T>
export declare function val__be_rmemo_pair_<
	val_T,
	ctx_T extends Ctx = Ctx
>(
	id:string|null|undefined,
	val__new?:(ctx:ctx_T)=>val_T,
	be__params?:be__params_T
):val__be_rmemo_pair_T<val_T, ctx_T>
export type val__be_rmemo_pair_T<
	val_T,
	ctx_T extends Ctx = Ctx
> = [
	Be<State<val_T>, ctx_T>,
	(ctx:ctx_T)=>val_T
]
