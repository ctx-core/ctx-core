import type { Be, be_config_T, Ctx, ctx__be_T, ctx__get_T, ctx__set_T, Ctx_wide_T } from '../be_/index.js'
import type { sig_T } from '../rmemo/index.js'
export declare function be_memosig_triple_<
	val_T,
	ns_T extends string = '',
	_sig_T extends sig_T<val_T> = sig_T<val_T>,
	ctx_T extends Ctx_wide_T<ns_T> = Ctx_wide_T<ns_T>,
>(be:Be<_sig_T, ns_T, ctx_T>):be_memosig_triple_T<val_T, ns_T, _sig_T, ctx_T>
export declare function be_memosig_triple_<
	val_T,
	ns_T extends string = '',
	_sig_T extends sig_T<val_T> = sig_T<val_T>,
	ctx_T extends Ctx_wide_T<ns_T> = Ctx_wide_T<ns_T>,
>(
	rmemo__new:(ctx:ctx_T, memosig:_sig_T)=>val_T,
	config?:be_config_T<ns_T>
):be_memosig_triple_T<val_T, ns_T, _sig_T, ctx_T>
export type be_memosig_triple_T<
	val_T,
	ns_T extends string = '',
	_sig_T extends sig_T<val_T> = sig_T<val_T>,
	ctx_T extends Ctx_wide_T<ns_T> = Ctx_wide_T<ns_T>,
> = [
	ctx__be_T<_sig_T, ns_T, ctx_T>,
	ctx__get_T<val_T, ns_T, ctx_T>,
	ctx__set_T<val_T, ns_T, ctx_T>,
]&{
	add<add_val_T>(
		add_def:(ctx:ctx_T, sig:_sig_T, prev_val:add_val_T|undefined)=>add_val_T
	):be_memosig_triple_T<val_T, ns_T, _sig_T, ctx_T>
}
