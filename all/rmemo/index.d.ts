export declare function memo_<val_T>(
	def:rmemo_def_T<val_T>,
	...subscriber_a:rmemo_subscriber_T<val_T>[]
):memo_T<val_T>
export declare function sig_<val_T>(
	init_val:val_T,
	...subscriber_a:rmemo_subscriber_T<val_T>[]
):sig_T<val_T>
export declare function memosig_<val_T>(
	def:rmemo_def_T<val_T>,
	...subscriber_a:rmemo_subscriber_T<val_T>[]
):sig_T<val_T>
export type rmemo_T<val_T> = memo_T<val_T>|sig_T<val_T>
export type memo_T<val_T> = (()=>val_T)&{
	readonly _:val_T
	readonly val:val_T
	rmr:WeakRef<()=>val_T>
	rmrs:WeakRef<()=>val_T>[]
}
export type sig_T<val_T> = (()=>val_T)&{
	_:val_T
	readonly val:val_T
	rmr:WeakRef<()=>val_T>
	rmrs:WeakRef<()=>val_T>[]
}
export type rmemo_val_T<sig_T> = sig_T extends { ():infer val_T }
	? val_T
	: unknown
export type rmemo_def_T<val_T> = (rw_rmemo:sig_T<val_T>)=>val_T
export type rmemo_subscriber_T<val_T> = (rw_rmemo:sig_T<val_T>)=>unknown
