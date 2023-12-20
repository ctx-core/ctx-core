/// <reference lib="dom" />
export declare function memo_<val_T>(
	def:memo_def_T<val_T>,
	...subscriber_a:memo_subscriber_T<val_T>[]
):memo_T<val_T>
export declare function sig_<val_T>(
	init_val:val_T,
	...subscriber_a:memo_subscriber_T<val_T>[]
):sig_T<val_T>
export declare function memosig_<val_T>(
	def:memo_def_T<val_T>,
	...subscriber_a:memo_subscriber_T<val_T>[]
):sig_T<val_T>
export declare function lock_memosig_<val_T>(
	def:memo_def_T<val_T>,
	...subscriber_a:memo_subscriber_T<val_T>[]
):sig_T<val_T>
export declare function on(rmemo:rmemo_T<unknown>):void
export declare function off(rmemo:rmemo_T<unknown>):void
export type rmemo_T<val_T> = memo_T<val_T>|sig_T<val_T>|lock_memosig_T<val_T>
export type memo_T<val_T> = (()=>val_T)&{
	readonly _:val_T
	readonly val:val_T
	r?:WeakRef<()=>val_T>
	memor:WeakRef<()=>val_T>[]
}
export type sig_T<val_T> = (()=>val_T)&{
	_:val_T
	readonly val:val_T
	r?:WeakRef<()=>val_T>
	memor:WeakRef<()=>val_T>[]
}
export type lock_memosig_T<val_T> = sig_T<val_T>&{
	lock?:0|1
}
export type rmemo_val_T<sig_T> = sig_T extends { ():infer val_T }
	? val_T
	: unknown
export type memo_def_T<val_T> = (sig:sig_T<val_T>)=>val_T
export type memo_subscriber_T<val_T> = (sig:sig_T<val_T>)=>unknown
