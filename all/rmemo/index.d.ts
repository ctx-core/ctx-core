export declare function r_rmemo_<val_T, ret_T extends rmemo_T<val_T> = r_rmemo_T<val_T>>(
	def:rmemo_def_T<val_T>,
	...subscriber_a:rmemo_subscriber_T<val_T>[]
):ret_T
export declare function rw_rmemo_<val_T>(
	init_val:val_T,
	...subscriber_a:rmemo_subscriber_T<val_T>[]
):rw_rmemo_T<val_T>
export declare function rwr_rmemo_<val_T>(
	def:rmemo_def_T<val_T>,
	...subscriber_a:rmemo_subscriber_T<val_T>[]
):rw_rmemo_T<val_T>
export declare function rw_rmemo__set_<val_T>(rmemo:rw_rmemo_T<val_T>):val_T
export type rmemo_T<val_T> = r_rmemo_T<val_T>|rw_rmemo_T<val_T>
export type r_rmemo_T<val_T> = {
	readonly _:val_T
	val:val_T
	rmr:WeakRef<()=>val_T>
	rmrs?:Set<WeakRef<()=>val_T>>
}
export type rw_rmemo_T<val_T> = {
	_:val_T
	val:val_T
	rmr:WeakRef<()=>val_T>
	rmrs:Set<WeakRef<()=>val_T>>
}
export type rmemo_val_T<rw_rmemo_T> = rw_rmemo_T extends {
		_:infer val_T
	}
	? val_T
	: unknown
export type rmemo_def_T<val_T> = (rw_rmemo:rw_rmemo_T<val_T>)=>val_T
export type rmemo_subscriber_T<val_T> = (rw_rmemo:rw_rmemo_T<val_T>)=>unknown
