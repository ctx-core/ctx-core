import type { rmemo_T, rmemo_val_T } from '../rmemo/index.js'
export declare function rmemo__wait<
	_rmemo_T extends rmemo_T<unknown> = rmemo_T<unknown>
>(
	memo:_rmemo_T,
	condition_fn:(val:rmemo_val_T<_rmemo_T>)=>unknown,
	timeout?:number
):Promise<rmemo_val_T<_rmemo_T>>