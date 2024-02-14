import type { cancel_Promise } from '../promise/index.js'
import type { memo_T, rmemolike_T, rmemo_val_T } from '../rmemo/index.js'
export declare function rmemo__wait<
	_rmemolike_T extends rmemolike_T<unknown> = rmemolike_T<unknown>
>(
	memo:_rmemolike_T,
	condition_fn:(val:rmemo_val_T<_rmemolike_T>)=>unknown,
	timeout?:number,
	error?:Error
):rmemo__wait_ret_T<rmemo_val_T<_rmemolike_T>>
export type rmemo__wait_ret_T<R> =
	cancel_Promise<
		R,
		(val?:R)=>Promise<R>
	>&{
	// prevent early usGC
	m:memo_T<unknown>
}
