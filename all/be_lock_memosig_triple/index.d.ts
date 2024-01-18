import type { Be, be_config_arg_a_T, ctx__be_T, ctx__get_T, ctx__set_T, Ctx_wide_T, } from '../be_/index.js'
import type { lock_memosig_T } from '../rmemo/index.js'
export declare function be_lock_memosig_triple_<
	val_T,
	ns_T extends string = '',
	E = unknown,
	ctx_T extends Ctx_wide_T<ns_T> = Ctx_wide_T<ns_T>,
>(be:Be<lock_memosig_T<val_T, E>, ns_T, ctx_T>):be_lock_memosig_triple_T<val_T, ns_T, E, ctx_T>
export declare function be_lock_memosig_triple_<
	val_T,
	ns_T extends string = '',
	E = unknown,
	ctx_T extends Ctx_wide_T<ns_T> = Ctx_wide_T<ns_T>,
>(
	rmemo__new:(ctx:ctx_T, memosig:lock_memosig_T<val_T, E>)=>val_T,
	...config:be_config_arg_a_T<ns_T>
):be_lock_memosig_triple_T<val_T, ns_T, E, ctx_T>
export declare function ns_be_lock_memosig_triple_<
	val_T,
	ns_T extends string,
	E = unknown,
	ctx_T extends Ctx_wide_T<ns_T> = Ctx_wide_T<ns_T>,
>(
	ns:ns_T,
	val__new:(ctx:ctx_T)=>val_T,
):be_lock_memosig_triple_T<val_T, ns_T, E, ctx_T>
export declare function id_be_lock_memosig_triple_<
	val_T,
	E = unknown,
	ctx_T extends Ctx_wide_T<''> = Ctx_wide_T<''>,
>(
	id:string,
	val__new:(ctx:ctx_T)=>val_T,
):be_lock_memosig_triple_T<val_T, '', E, ctx_T>
export declare function ns_id_be_lock_memosig_triple_<
	val_T,
	ns_T extends string,
	E = unknown,
	ctx_T extends Ctx_wide_T<ns_T> = Ctx_wide_T<ns_T>,
>(
	ns:ns_T,
	id:string,
	val__new:(ctx:ctx_T)=>val_T,
):be_lock_memosig_triple_T<val_T, ns_T, E, ctx_T>
export type be_lock_memosig_triple_T<
	val_T,
	ns_T extends string = '',
	E = unknown,
	ctx_T extends Ctx_wide_T<ns_T> = Ctx_wide_T<ns_T>,
> = [
	ctx__be_T<lock_memosig_T<val_T, E>, ns_T, ctx_T>,
	ctx__get_T<val_T, ns_T, ctx_T>,
	ctx__set_T<val_T, ns_T, ctx_T>,
]&{
	add<add_val_T>(
		add_def:(ctx:ctx_T, sig:lock_memosig_T<val_T, E>)=>add_val_T
	):be_lock_memosig_triple_T<val_T, ns_T, E, ctx_T>
}
