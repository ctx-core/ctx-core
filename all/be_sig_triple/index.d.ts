import type { Be, be__val__new_T, be_config_T, Ctx } from '../be_/index.js'
import type { sig_T, rmemo_def_T, rmemo_val_T } from '../rmemo/index.js'
export declare function be_sig_triple_<
	val_T,
	_sig_T extends sig_T<val_T> = sig_T<val_T>,
	ctx_T extends Ctx = Ctx
>(be: Be<_sig_T, ctx_T>):be_sig_triple_T<_sig_T, ctx_T>
export declare function be_sig_triple_<
	val_T,
	_sig_T extends sig_T<val_T> = sig_T<val_T>,
	ctx_T extends Ctx = Ctx
>(
	rmemo__new:be__val__new_T<val_T>,
	...subscriber_a_THEN_config:
		|[...rmemo_def_T<val_T>[]]
		|[...rmemo_def_T<val_T>[], config:be_config_T]
):be_sig_triple_T<_sig_T, ctx_T>
export type be_sig_triple_T<
	_sig_T extends sig_T<unknown> = sig_T<unknown>,
	ctx_T extends Ctx = Ctx
> = [
	Be<_sig_T>,
	(ctx:ctx_T)=>rmemo_val_T<_sig_T>,
	(ctx:ctx_T, val:rmemo_val_T<_sig_T>)=>void
]
