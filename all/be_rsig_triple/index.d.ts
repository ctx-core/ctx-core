import type { Be, be__val__new_T, be_config_T, Ctx } from '../be_/index.js'
import type { readwrite_rmemo_T, rmemo_def_T } from '../rmemo/index.js'
export declare function be_rsig_triple_<
	val_T,
	rsig_T extends readwrite_rmemo_T<val_T> = readwrite_rmemo_T<val_T>,
	ctx_T extends Ctx = Ctx
>(be: Be<rsig_T, ctx_T>):be_rsig_triple_T<val_T, rsig_T, ctx_T>
export declare function be_rsig_triple_<
	val_T,
	rsig_T extends readwrite_rmemo_T<val_T> = readwrite_rmemo_T<val_T>,
	ctx_T extends Ctx = Ctx
>(
	rmemo__new:be__val__new_T<val_T>,
	...subscriber_a_THEN_config:[...rmemo_def_T<val_T>[], config?:be_config_T]
):be_rsig_triple_T<val_T, rsig_T, ctx_T>
export type be_rsig_triple_T<
	val_T,
	rsig_T extends readwrite_rmemo_T<val_T> = readwrite_rmemo_T<val_T>,
	ctx_T extends Ctx = Ctx
> = [
	Be<rsig_T>,
	(ctx:ctx_T)=>val_T,
	(ctx:ctx_T, val:val_T)=>void
]
