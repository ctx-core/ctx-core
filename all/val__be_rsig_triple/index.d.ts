import type { Be, be__params_T, Ctx, MapCtx } from '../be_/index.js'
import type { readwrite_rmemo_T } from '../rmemo/index.js'
export declare function val__be_rsig_triple_<
	val_T,
	ctx_T extends Ctx = Ctx
>(
	be__params?:be__params_T
):val__be_rsig_triple_T<val_T, ctx_T>
export declare function val__be_rsig_triple_<
	val_T,
	ctx_T extends Ctx = Ctx
>(
	id:string|null|undefined,
	be__params?:be__params_T
):val__be_rsig_triple_T<val_T, ctx_T>
export declare function val__be_rsig_triple_<
	val_T,
	ctx_T extends Ctx = Ctx
>(
	val__new:(ctx:MapCtx)=>val_T,
	be__params?:be__params_T
):val__be_rsig_triple_T<val_T, ctx_T>
export declare function val__be_rsig_triple_<
	val_T,
	ctx_T extends Ctx = Ctx
>(
	id?:string|null|undefined,
	val__new?:(ctx:MapCtx)=>Task<val_T>|val_T,
	be__params?:be__params_T
):val__be_rsig_triple_T<val_T, ctx_T>
export type val__be_rsig_triple_T<
	val_T,
	ctx_T extends Ctx = Ctx
> = [
	Be<readwrite_rmemo_T<val_T>>,
	(ctx:ctx_T)=>val_T,
	(ctx:ctx_T, val:val_T)=>void
]
