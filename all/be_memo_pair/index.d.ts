import type { Be, be_config_T, Ctx, ctx__be_T, ctx__get_T, Ctx_wide_T } from '../be_/index.js'
import type { memo_T, sig_T } from '../rmemo/index.js'
export declare function be_memo_pair_<
	val_T,
	ns_T extends string = '',
	_memo_T extends memo_T<val_T> = memo_T<val_T>,
	ctx_T extends Ctx = Ctx_wide_T<ns_T>,
>(be:Be<_memo_T, ns_T, ctx_T>):be_memo_pair_T<val_T, ns_T, _memo_T, ctx_T>
export declare function be_memo_pair_<
	val_T,
	ns_T extends string = '',
	_memo_T extends memo_T<val_T> = memo_T<val_T>,
	ctx_T extends Ctx = Ctx_wide_T<ns_T>
>(
	rmemo__new:(ctx:ctx_T, memo:_memo_T&{ _:val_T })=>val_T,
	...subscriber_a_THEN_config:
		|[...((ctx:ctx_T, memosig:sig_T<val_T>)=>unknown)[]]
		|[...((ctx:ctx_T, memosig:sig_T<val_T>)=>unknown)[], config:be_config_T]
):be_memo_pair_T<val_T, ns_T, _memo_T, ctx_T>
export type be_memo_pair_T<
	val_T,
	ns_T extends string = '',
	_memo_T extends memo_T<val_T> = memo_T<val_T>,
	ctx_T extends Ctx = Ctx_wide_T<ns_T>
> = [
	ctx__be_T<ctx_T, _memo_T, ns_T>,
	ctx__get_T<ctx_T, val_T>,
]
