import type { Be, be__val__new_T, be_config_T, Ctx } from '../be_/index.js'
import type { memo_T, sig_T } from '../rmemo/index.js'
export declare function be_memo_pair_<
	val_T,
	_memo_T extends memo_T<val_T> = memo_T<val_T>,
	ctx_T extends Ctx = Ctx
>(be: Be<_memo_T, ctx_T>):be_memo_pair_T<val_T, _memo_T, ctx_T>
export declare function be_memo_pair_<
	val_T,
	_memo_T extends memo_T<val_T> = memo_T<val_T>,
	ctx_T extends Ctx = Ctx
>(
	rmemo__new:be__val__new_T<val_T>,
	...subscriber_a_THEN_config:
		|[...((ctx:Ctx, memosig:sig_T<val_T>)=>unknown)[]]
		|[...((ctx:Ctx, memosig:sig_T<val_T>)=>unknown)[], config:be_config_T]
):be_memo_pair_T<val_T, _memo_T, ctx_T>
export type be_memo_pair_T<
	val_T,
	_memo_T extends memo_T<val_T> = memo_T<val_T>,
	ctx_T extends Ctx = Ctx
> = [
	Be<_memo_T, ctx_T>,
	(ctx:ctx_T)=>val_T
]
