import { cancel_Promise } from '../promise/index.js'
import type { memo_T, rmemo_T, rmemo_val_T } from '../rmemo/index.js'
export declare function rmemo__wait<
	_rmemo_T extends rmemo_T<unknown> = rmemo_T<unknown>
>(
	memo:_rmemo_T,
	condition_fn:(val:rmemo_val_T<_rmemo_T>)=>unknown,
	timeout?:number,
	error?:Error
):rmemo__wait_ret_T<rmemo_val_T<_rmemo_T>>
export type rmemo__wait_ret_T<R> =
	cancel_Promise<
		R,
		(val?:R)=>Promise<R>
	>&{
	// prevent early usGC
	m:memo_T<unknown>
}
