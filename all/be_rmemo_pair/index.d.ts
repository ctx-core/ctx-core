import type { Be, be__val__new_T, be_config_T, Ctx } from '../be_/index.js'
import type { read_rmemo_T, rmemo_def_T } from '../rmemo/index.js'
export declare function be_rmemo_pair_<
	val_T,
	rmemo_T extends read_rmemo_T<val_T> = read_rmemo_T<val_T>,
	ctx_T extends Ctx = Ctx
>(be: Be<rmemo_T, ctx_T>):be_rmemo_pair_T<val_T, rmemo_T, ctx_T>
export declare function be_rmemo_pair_<
	val_T,
	rmemo_T extends read_rmemo_T<val_T> = read_rmemo_T<val_T>,
	ctx_T extends Ctx = Ctx
>(
	rmemo__new:be__val__new_T<val_T>,
	...subscriber_a_THEN_config:[...rmemo_def_T<val_T>[], config?:be_config_T]
):be_rmemo_pair_T<val_T, rmemo_T, ctx_T>
export type be_rmemo_pair_T<
	val_T,
	rmemo_T extends read_rmemo_T<val_T> = read_rmemo_T<val_T>,
	ctx_T extends Ctx = Ctx
> = [
	Be<rmemo_T, ctx_T>,
	(ctx:ctx_T)=>val_T
]
