import type { Ctx } from '../be_/index.js'
import type { rc_be__val__T } from '../rc_be_/index.js'
export declare function rc_be<
	Out extends NonNullable<unknown>
>(ctx:Ctx, val_:rc_be__val__T<Out>):Out
export declare function rc_be<
	Out extends NonNullable<unknown>
>(ctx:Ctx, key:string, val_:rc_be__val__T<Out>):Out
export { rc_be as rc_b, }
