export declare const pending_symbol:unique symbol
export declare function globalThis__be_<
	val_T,
	ctx_T extends Ctx = Ctx
>(val_:be__val__new_T<val_T, ctx_T>):Be<val_T, ctx_T>
/**
 * Auto-memoization function for the Ctx.
 *
 * Returns a function to ensure that a member id is defined on a ctx object,
 * otherwise it creates the value using the val_ factory function.
 */
export declare function be_<
	val_T,
	ctx_T extends Ctx = Ctx
>(val_:be__val__new_T<val_T, ctx_T>):Be<val_T, ctx_T>
export type be___T<
	val_T,
	ctx_T extends Ctx = Ctx
> = typeof be_<val_T, ctx_T>
export {
	be_ as _be,
	be_ as b_,
	be_ as _b,
}
export declare function be__is_source_<
	ctx_T extends Ctx = Ctx
>(be:Be<unknown>):(map_ctx:MapCtx, ctx:ctx_T)=>boolean
export declare function source__map_ctx_<
	ctx_T extends Ctx = Ctx
>(ctx:Ctx, is_source_:is_source__T):MapCtx
export declare function be__set<
	val_T,
	ctx_T extends Ctx = Ctx
>(
	be:Be<val_T>,
	ctx:ctx_T,
	val:val_T
):void
export declare function ctx__set<
	val_T,
	ctx_T extends Ctx = Ctx
>(
	ctx:ctx_T,
	be_OR_id:Be<val_T>|string|symbol,
	val:val_T,
	is_source_?:is_source__T
):void
export declare function be__delete<
	val_T,
	ctx_T extends Ctx = Ctx
>(
	be:Be<val_T>,
	ctx:ctx_T
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
export declare function be__has__ctx_<
	ctx_T extends Ctx = Ctx
>(be_OR_id:Be<unknown>|string, ctx:ctx_T):MapCtx
export declare function be__val_<
	val_T,
	ctx_T extends Ctx = Ctx
>(be_OR_id:Be<val_T>|string, ctx:ctx_T):val_T|unknown|null
export declare type MapCtx = Map<Be<unknown>|string|symbol, unknown>
export interface NestedMapCtx extends Array<NestedMapCtx|MapCtx> {
}
export type Ctx = MapCtx|NestedMapCtx
export declare type Be<
	val_T,
	ctx_T extends Ctx = Ctx
> = ((ctx:ctx_T, params?:be_params_T)=>val_T)&{
	id?:string
	id__set:(id:string)=>Be<val_T, ctx_T>
	expired__def:(expired:expired__T)=>Be<val_T, ctx_T>
	is_source__def:(is_source_:is_source__T)=>Be<val_T, ctx_T>
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
> = (ctx:ctx_T, be:Be<val_T, ctx_T>, params?:be_params_T)=>val_T
export interface be_params_T {
	force?:boolean
}
export type is_source__T = (map_ctx:MapCtx, ctx:Ctx)=>boolean
export type expired__T = (ctx:Ctx)=>boolean
