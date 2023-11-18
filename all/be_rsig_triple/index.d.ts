import type { Be, be__params_T, Ctx, MapCtx } from '../be_/index.js'
import type { readwrite_rmemo_T, rmemo_val_T } from '../rmemo/index.js'
export declare function be_rsig_triple_<
	A extends readwrite_rmemo_T = readwrite_rmemo_T<unknown>,
	ctx_T extends Ctx = Ctx
>(
	be__params?:be__params_T
):be_rsig_triple_T<A, ctx_T>
export declare function be_rsig_triple_<
	A extends readwrite_rmemo_T = readwrite_rmemo_T<unknown>,
	ctx_T extends Ctx = Ctx
>(
	id:string|null|undefined,
	be__params?:be__params_T
):be_rsig_triple_T<A, ctx_T>
export declare function be_rsig_triple_<
	A extends readwrite_rmemo_T = readwrite_rmemo_T<unknown>,
	ctx_T extends Ctx = Ctx
>(
	atom__new:(ctx:MapCtx)=>A,
	be__params?:be__params_T
):be_rsig_triple_T<A, ctx_T>
export declare function be_rsig_triple_<
	A extends readwrite_rmemo_T = readwrite_rmemo_T<unknown>,
	ctx_T extends Ctx = Ctx
>(
	id?:string|null|undefined,
	atom__new?:(ctx:MapCtx)=>A,
	be__params?:be__params_T
):be_rsig_triple_T<A, ctx_T>
export type be_rsig_triple_T<
	A extends readwrite_rmemo_T = readwrite_rmemo_T<unknown>,
	ctx_T extends Ctx = Ctx
> = [
	Be<A>,
	(ctx:ctx_T)=>rmemo_val_T<A>,
	(ctx:ctx_T, val:rmemo_val_T<A>)=>void
]
