import type { Be, be_config_T, Ctx } from '../be_/index.js'
import type { rmemo_val_T, sig_T } from '../rmemo/index.js'
export declare function be_sig_triple_<
	val_T,
	_sig_T extends sig_T<val_T> = sig_T<val_T>,
	ctx_T extends Ctx = Ctx
>(be:Be<_sig_T, ctx_T>):be_sig_triple_T<val_T, _sig_T, ctx_T>
export declare function be_sig_triple_<
	val_T,
	_sig_T extends sig_T<val_T> = sig_T<val_T>,
	ctx_T extends Ctx = Ctx
>(
	val__new:(ctx:Ctx, sig:_sig_T)=>val_T,
	...subscriber_a_THEN_config:
		|[...((ctx:Ctx, sig:_sig_T)=>unknown)[]]
		|[...((ctx:Ctx, sig:_sig_T)=>unknown)[], config:be_config_T]
):be_sig_triple_T<val_T, _sig_T, ctx_T>
export type be_sig_triple_T<
	val_T,
	_sig_T extends sig_T<val_T> = sig_T<val_T>,
	ctx_T extends Ctx = Ctx
> = [
	Be<_sig_T>,
	(ctx:ctx_T)=>val_T,
	(ctx:ctx_T, val:rmemo_val_T<_sig_T>)=>void
]
