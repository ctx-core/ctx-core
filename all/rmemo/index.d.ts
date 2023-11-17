export declare function rmemo_<val_T>(
	def:rmemo_def_T<val_T>,
	...subscriber_a:rmemo_subscriber_T<val_T>[]
):rmemo_T<val_T>
export declare function rsig_<val_T>(
	init_val:val_T,
	...subscriber_a:rmemo_subscriber_T<val_T>[]
):rmemo_T<val_T>
export type rmemo_T<val_T> = ((val?:val_T)=>val_T)&rmemo_o_T<val_T>
export type rmemo_def_T<val_T> = (rmemo:rmemo_T<val_T>)=>val_T
export type rmemo_subscriber_T<val_T> = (rmemo:rmemo_T<val_T>)=>unknown
export type rmemo_o_T<val_T> = {
	_:val_T
	readonly val:val_T
	go():unknown
	onset(val:val_T):unknown
	refresh():val_T
}