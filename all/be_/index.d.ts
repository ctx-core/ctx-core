export declare const pending_symbol:unique symbol
export declare function globalThis__be_<
	val_T,
	ctx_T extends Ctx = Ctx
>(id:string|symbol, val_:be__val__new_T<val_T, ctx_T>):Be<val_T, ctx_T>
/**
 * Auto-memoization function for the Ctx.
 *
 * Returns a function to ensure that a member id is defined on a Ctx,
 * otherwise it caches & uses the return value of val__new.
 */
export declare function be_<
	val_T,
	ctx_T extends Ctx = Ctx
>(val__new:be__val__new_T<val_T, ctx_T>, config?:be_config_T):Be<val_T, ctx_T>
export type be___T<
	val_T,
	ctx_T extends Ctx = Ctx
> = typeof be_<val_T, ctx_T>
export declare function be__is_source_<
	ctx_T extends Ctx = Ctx
>(be:Be<unknown>):(map_ctx:MapCtx, ctx:ctx_T)=>boolean
export declare function source__map_ctx_<
	ctx_T extends Ctx = Ctx
>(ctx:ctx_T, is_source_:is_source__T):MapCtx
export declare function ctx__set<
	val_T,
	ctx_T extends Ctx = Ctx
>(
	ctx:ctx_T,
	be_OR_id:Be<val_T>|string|symbol,
	val:val_T,
	is_source_?:is_source__T
):void
export declare function ctx__delete<
	val_T,
	ctx_T extends Ctx = Ctx
>(
	ctx:ctx_T,
	be_OR_id:Be<val_T>|string|symbol,
	is_source_?:is_source__T
):void
export declare function be__has_<
	ctx_T extends Ctx = Ctx
>(be_OR_id:Be<unknown>|string, ctx:ctx_T):boolean
export declare function be__ctx_<
	ctx_T extends Ctx = Ctx
>(be_OR_id:Be<unknown>|string, ctx:ctx_T):MapCtx
export declare function be__val_<
	val_T,
	ctx_T extends Ctx = Ctx
>(be_OR_id:Be<val_T>|string, ctx:ctx_T):val_T|unknown|null
export type MapCtx = Map<Be<unknown>|string|symbol, unknown>&{ is_ctx: true }
export type NestedMapCtx = Array<NestedMapCtx|MapCtx>
export type Ctx = MapCtx|NestedMapCtx
export declare type Be<
	val_T,
	ctx_T extends Ctx = Ctx
> = ((ctx:ctx_T)=>val_T)&{
	is_be: true
	id?:string
}
export type be_config_T = {
	id?:string
	is_source_?:is_source__T
}
export declare type be__return_T<
	val_T,
	ctx_T extends Ctx = Ctx
> = Be<val_T, ctx_T>
export declare type be_T<
	val_T,
	ctx_T extends Ctx = Ctx
> = Be<val_T, ctx_T>
export declare type be__val__new_T<
	val_T,
	ctx_T extends Ctx = Ctx
> = (ctx:ctx_T, be:Be<val_T, ctx_T>)=>val_T
export type is_source__T = (map_ctx:MapCtx, ctx:Ctx)=>boolean
