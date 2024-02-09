export declare function globalThis__be_<
	val_T,
	ns_T extends string = '',
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
>(val__new:be__val__new_T<val_T, ns_T, ctx_T>, config:be_config_T<ns_T>&{
	id:string
}):Be<val_T, ns_T, ctx_T>
/**
 * Auto-memoization function for the ctx_T.
 *
 * Returns a function to ensure that a member id is defined on a ctx_T,
 * otherwise it caches & uses the return value of val__new.
 */
export declare function be_<
	val_T,
	ns_T extends string = '',
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
>(
	val__new:be__val__new_T<val_T, ns_T, ctx_T>,
	...config_arg_a:be_config_arg_a_T<ns_T>
):Be<val_T, ns_T, ctx_T>
export type be_config_arg_a_T<ns_T extends string = ''> =
	ns_T extends ''
		? []|[config:be_config_T<ns_T>]
		: [config:be_config_T<ns_T>]
export declare function ns_be_<
	val_T,
	ns_T extends string,
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
>(
	ns:ns_T,
	val__new:be__val__new_T<val_T, ns_T, ctx_T>
):Be<val_T, ns_T, ctx_T>
export declare function id_be_<
	val_T,
	ctx_T extends wide_ctx_T<''> = wide_ctx_T<''>,
>(
	id:string,
	val__new:be__val__new_T<val_T, '', ctx_T>
):Be<val_T, '', ctx_T>
export declare function ns_id_be_<
	val_T,
	ns_T extends string,
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
>(
	ns:ns_T,
	id:string,
	val__new:be__val__new_T<val_T, ns_T, ctx_T>
):Be<val_T, ns_T, ctx_T>
export declare function ctx__get<
	val_T,
	ns_T extends string = '',
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
>(
	ctx:ctx_T,
	be_OR_id:Be<val_T>|string|symbol,
	ns?:ns_T
):val_T
export declare function ctx__set<
	val_T,
	ns_T extends string = '',
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
>(
	ctx:ctx_T,
	be_OR_id:Be<val_T>|string|symbol,
	val:val_T,
	ns?:ns_T
):void
export declare function ctx__delete<
	ns_T extends string = '',
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
>(
	ctx:ctx_T,
	be_OR_id:Be<unknown, ns_T, ctx_T>|string|symbol,
	ns?:string
):void
/**
 * Clear all BeMap values by running ctx__delete on all stored Be functions.
 * This behavior can be used in conjunction with ondelete_be_ to run the ondelete callbacks
 * on all of the ondelete_be functions.
 */
export declare function ctx__clear(ctx:ctx_T):void
export declare function be__has_<
	ns_T extends string = '',
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
>(be_OR_id:Be<unknown, ns_T, ctx_T>|string, ctx:ctx_T, ns?:ns_T):boolean
export declare function be_map__find<
	ns_T extends string = '',
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
>(be_OR_id:Be<unknown, ns_T, ctx_T>|string, ctx:ctx_T, ns?:ns_T):BeMap<ns_T>
export declare function be__val_<
	val_T,
	ns_T extends string = '',
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
>(be_OR_id:Be<val_T, ns_T, ctx_T>|string, ctx:ctx_T, ns?:ns_T):val_T|unknown|null
export declare function ondelete_be_<
	val_T,
	ns_T extends string = '',
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
>(
	val__new:ondelete_be__val__new_T<val_T, ns_T, ctx_T>,
	config?:be_config_T<ns_T>
):ondelete_Be<val_T, ns_T, ctx_T>
export type Be<
	val_T,
	ns_T extends string = '',
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
> = ((ctx:ctx_T)=>val_T)&be_o_T<val_T, ns_T, ctx_T>
export type ondelete_Be<
	val_T,
	ns_T extends string = '',
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
> = ((ctx:ctx_T)=>val_T)&be_o_T<val_T, ns_T, ctx_T>&{
	ondelete(
		cb:(val:val_T, ctx:ctx_T, be:Be<val_T, ns_T, ctx_T>)=>void
	):ondelete_Be<val_T, ns_T, ctx_T>
	d():void
}
export type be_o_T<
	val_T,
	ns_T extends string = '',
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
> = {
	id:string|Be<val_T, ns_T, ctx_T>
	ns:ns_T
	is_be:true
}
export type be_config_T<ns_T extends string = string> =
	ns_T extends ''
		? { id?:string, ns?:ns_T }
		: { id?:string, ns:ns_T }
export type BeMap<
	ns_T extends string = ''
> =
	Map<
		Be<unknown, ns_T, wide_ctx_T<ns_T>>|string|symbol,
		[unknown, Be<unknown, ns_T, wide_ctx_T<ns_T>>, wide_ctx_T<ns_T>]
	>
export type BeMapO<ns_union_T extends string> =
	{ [K in ns_union_T]:BeMap<K> }
export type be__val__new_T<
	val_T,
	ns_T extends string = '',
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
> = (ctx:ctx_T, be:Be<val_T, ns_T, ctx_T>)=>val_T
export type ondelete_be__val__new_T<
	val_T,
	ns_T extends string = '',
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
> =
	(
		ctx:ctx_T,
		be:ondelete_Be<val_T, ns_T, ctx_T>
	)=>val_T
export type ctx_T<ns_T extends string = string> = Readonly<{
	s:ctx_s_T<ns_T>
	is_ctx:true
	/**
	 * Used for type inference narrowing. There is no js implementation.
	 */
	ns_T?:ns_T
}>
export type wide_ctx_T<ns_union_T extends string = ''> =
	ctx_T&wide_ctx_s_T<ns_union_T>
export type ctx_s_T<ns_union_T extends string = string> = {
	[K in ns_union_T]:BeMap<K>
}
export type wide_ctx_s_T<ns_union_T extends string> = {
	s:BeMapO<ns_union_T>
}
export type ctx__be_T<
	be_val_T,
	ns_T extends string = '',
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
> = Be<be_val_T, ns_T, ctx_T>
export type ctx__get_T<
	val_T,
	ns_T extends string = '',
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
> = (ctx:ctx_T)=>val_T
export type ctx__set_T<
	val_T,
	ns_T extends string = '',
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
> = (ctx:ctx_T, val:val_T)=>void
