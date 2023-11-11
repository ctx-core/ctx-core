import type { be__params_T, Ctx } from '../be_/index.js'
export declare function be_arg_triple__new<
	val_T,
	ctx_T extends Ctx = Ctx,
>(...arg_a:be_arg_triple__new__arg_a_T<val_T, ctx_T>):be_arg_triple_T<val_T, ctx_T>
export type be_arg_triple_T<
	val_T,
	ctx_T extends Ctx = Ctx
> = [
	id:string|null,
	val__new:(ctx:ctx_T)=>val_T,
	be__params:be__params_T
]
export type be_arg_triple__new__arg_a_T<
	val_T,
	ctx_T extends Ctx = Ctx,
> =
	|[be__params?:be__params_T]
	|[id:string|null|undefined, be__params?:be__params_T]
	|[val__new:(ctx:ctx_T)=>val_T, be__params?:be__params_T]
	|[id?:string|null|undefined, val__new?:((ctx:ctx_T)=>val_T), be__params?:be__params_T]
