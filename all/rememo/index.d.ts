export declare function rememo_<val_T>(
	def:rememo_def_T<val_T>,
	...subscriber_a:rememo_subscriber_T<val_T>[]
):rememo_T<val_T>
export declare function signal_<val_T>(
	init_val:val_T,
	...subscriber_a:rememo_subscriber_T<val_T>[]
):rememo_T<val_T>
export type rememo_T<val_T> = ((val?:val_T)=>val_T)&rememo_o_T<val_T>
export type rememo_def_T<val_T> = (rememo:rememo_T<val_T>)=>val_T
export type rememo_subscriber_T<val_T> = (rememo:rememo_T<val_T>)=>unknown
export type rememo_o_T<val_T> = {
	_:val_T
	readonly val:val_T
	go():unknown
	onset(val:val_T):unknown
	refresh():val_T
}
