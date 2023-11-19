import type { Be, be__config_params_T, be__val__new_T, Ctx } from '../be_/index.js'
import type { read_rmemo_T, rmemo_subscriber_T } from '../rmemo/index.js'
export declare function be_rmemo_pair_<
	val_T,
	rmemo_T extends read_rmemo_T<val_T> = read_rmemo_T<val_T>,
	ctx_T extends Ctx = Ctx
>(
	rmemo__new:be__val__new_T<val_T>,
  ...subscriber_a:rmemo_subscriber_T<rmemo_T>[]
):be_rmemo_pair_T<val_T, rmemo_T, ctx_T>
export type be_rmemo_pair_T<
	val_T,
	rmemo_T extends read_rmemo_T<val_T> = read_rmemo_T<val_T>,
	ctx_T extends Ctx = Ctx
> = [
	Be<rmemo_T, ctx_T>,
	(ctx:ctx_T)=>val_T
]&{
	config:(params:be__config_params_T)=>be_rmemo_pair_T<val_T, rmemo_T, ctx_T>
	oninit:(fn:(ctx:Ctx, rmemo:rmemo_T)=>unknown)=>be_rmemo_pair_T<val_T, rmemo_T, ctx_T>
}
