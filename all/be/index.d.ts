import type { be__val__new_T, Ctx, Ctx_wide_T } from '../be_/index.js'
export declare function be<
	Out extends NonNullable<unknown>,
	ns_T extends string = '',
	ctx_T extends Ctx = Ctx_wide_T<ns_T>
>(ctx:ctx_T, val_:be__val__new_T<Out, ns_T, ctx_T>):Out
export { be as b, }
