import type { be__val__new_T, be_config_T, wide_ctx_T } from '../be_/index.js'
export declare function be<
	val_T extends NonNullable<unknown>,
	ns_T extends string = '',
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
>(
	ctx:ctx_T,
	val_:be__val__new_T<val_T, ns_T, ctx_T>,
	config:be_config_T<ns_T>
):val_T
export { be as b, }
export declare function id_be<
	val_T extends NonNullable<unknown>,
	ctx_T extends wide_ctx_T<''> = wide_ctx_T<''>,
>(
	ctx:ctx_T,
	id:string,
	val_:be__val__new_T<val_T, '', ctx_T>,
):val_T
export declare function ns_be<
	val_T extends NonNullable<unknown>,
	ns_T extends string = '',
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
>(
	ctx:ctx_T,
	ns:ns_T,
	val_:be__val__new_T<val_T, ns_T, ctx_T>,
):val_T
export declare function ns_id_be<
	val_T extends NonNullable<unknown>,
	ns_T extends string = '',
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
>(
	ctx:ctx_T,
	ns:ns_T,
	id:string,
	val_:be__val__new_T<val_T, ns_T, ctx_T>,
):val_T
