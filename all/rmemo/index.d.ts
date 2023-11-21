export declare function r_rmemo_<val_T>(
	def:rmemo_def_T<val_T>,
	...subscriber_a:rmemo_subscriber_T<val_T>[]
):r_rmemo_T<val_T>
export declare function rw_rmemo_<val_T>(
	init_val:val_T,
	...subscriber_a:rmemo_subscriber_T<val_T>[]
):rw_rmemo_T<val_T>
export type r_rmemo_T<val_T> = {
	readonly _:val_T
	val:val_T
	get():val_T
	go():r_rmemo_T<val_T>
}
export type rw_rmemo_T<val_T> = {
	_:val_T
	val:val_T
	get():val_T
	set(val:val_T):void
	go():r_rmemo_T<val_T>
}
export type rmemo_val_T<rw_rmemo_T> = rw_rmemo_T extends {
		_:infer val_T
	}
	? val_T
	: unknown
export type rmemo_def_T<val_T> = (rw_rmemo:rw_rmemo_T<val_T>)=>val_T
export type rmemo_subscriber_T<val_T> = (rw_rmemo:rw_rmemo_T<val_T>)=>unknown
