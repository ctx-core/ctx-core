import type { Be, be__params_T, Ctx, MapCtx } from '../be_/index.js'
import type { read_rmemo_T, rmemo_val_T } from '../rmemo/index.js'
export declare function be_rmemo_pair_<
	C extends read_rmemo_T = read_rmemo_T<unknown>,
	ctx_T extends Ctx = Ctx
>(
	rmemo__new:(ctx:MapCtx)=>C,
	be__params?:be__params_T
):be_rmemo_pair_T<C, ctx_T>
export declare function be_rmemo_pair_<
	C extends read_rmemo_T = read_rmemo_T_<unknown>,
	ctx_T extends Ctx = Ctx
>(
	id:string|null|undefined,
	rmemo__new:(ctx:MapCtx)=>C,
	be__params?:be__params_T
):be_rmemo_pair_T<C, ctx_T>
export type be_rmemo_pair_T<
	C extends read_rmemo_T = read_rmemo_T_<unknown>,
	ctx_T extends Ctx = Ctx
> = [
	Be<C, ctx_T>,
	(ctx:ctx_T)=>rmemo_val_T<C>
]
