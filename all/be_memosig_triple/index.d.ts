import type { Be, ctx__be_T, ctx__get_T, ctx__set_T, wide_ctx_T } from '../be_/index.js'
import type { be_rmemo_add_def_T, sig_T } from '../rmemo/index.js'
export declare function be_memosig_triple_<
	val_T,
	ns_T extends string = '',
	E = unknown,
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
>(be:Be<sig_T<val_T, E>, ns_T, ctx_T>):be_memosig_triple_T<val_T, ns_T, E, ctx_T>
export declare function be_memosig_triple_<
	val_T,
	ns_T extends string = '',
	E = unknown,
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
>(
	val__new:(ctx:ctx_T, memosig:sig_T<val_T, E>)=>val_T,
	add_def_a1?:be_rmemo_add_def_T<val_T, ns_T, E, ctx_T>[]
):be_memosig_triple_T<val_T, ns_T, E, ctx_T>
export declare function ns_be_memosig_triple_<
	val_T,
	ns_T extends string,
	E = unknown,
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
>(
	ns:ns_T,
	val__new:(ctx:ctx_T, memosig:sig_T<val_T, E>)=>val_T,
	add_def_a1?:be_rmemo_add_def_T<val_T, ns_T, E, ctx_T>[]
):be_memosig_triple_T<val_T, ns_T, E, ctx_T>
export declare function id_be_memosig_triple_<
	val_T,
	E = unknown,
	ctx_T extends wide_ctx_T<''> = wide_ctx_T<''>,
>(
	id:string,
	val__new:(ctx:ctx_T, memosig:sig_T<val_T, E>)=>val_T,
	add_def_a1?:be_rmemo_add_def_T<val_T, '', E, ctx_T>[]
):be_memosig_triple_T<val_T, '', E, ctx_T>
export declare function ns_id_be_memosig_triple_<
	val_T,
	ns_T extends string,
	E = unknown,
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
>(
	ns:ns_T,
	id:string,
	val__new:(ctx:ctx_T, memosig:sig_T<val_T, E>)=>val_T,
	add_def_a1?:be_rmemo_add_def_T<val_T, ns_T, E, ctx_T>[]
):be_memosig_triple_T<val_T, ns_T, E, ctx_T>
export type be_memosig_triple_T<
	val_T,
	ns_T extends string = '',
	E = unknown,
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
> = [
	ctx__be_T<sig_T<val_T, E>, ns_T, ctx_T>,
	ctx__get_T<val_T, ns_T, ctx_T>,
	ctx__set_T<val_T, ns_T, ctx_T>,
]
