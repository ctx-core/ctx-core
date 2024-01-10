/// <reference lib="es2021" />
export declare function memo_<val_T>(def:memo_def_T<val_T>):memo_T<val_T>
export declare function sig_<val_T>(init_val:val_T):sig_T<val_T>
export declare function memosig_<val_T>(def:memo_def_T<val_T>):sig_T<val_T>
export declare function lock_memosig_<val_T>(def:memo_def_T<val_T>):sig_T<val_T>
export declare function rmemo__on(rmemo:rmemo_T<unknown>):void
export declare function rmemo__off(rmemo:rmemo_T<unknown>):void
export declare function rmemo__add(rmemo:rmemo_T<unknown>, listener:()=>unknown):()=>void
export type rmemo_T<val_T> = memo_T<val_T>|sig_T<val_T>|lock_memosig_T<val_T>
export type circular_rmemo_T = circular_memo_T|circular_sig_T|circular_lock_memosig_T
export type memo_T<val_T> = (()=>val_T)&{
	readonly _:val_T
	readonly val:val_T
	r?:WeakRef<()=>val_T>
	memor:WeakRef<()=>val_T>[]
	a?:rmemo_a_T[]
	add<add_val_T>(add_def:(sig:sig_T<val_T>, prev_val:add_val_T|undefined)=>add_val_T):memo_T<val_T>
	// memo_<_val_T>(def:memo_def_T<_val_T>):memo_T<_val_T>
}
export interface circular_memo_T extends memo_T<circular_memo_T> {
}
export type sig_T<val_T> = (()=>val_T)&{
	_:val_T
	readonly val:val_T
	r?:WeakRef<()=>val_T>
	memor:WeakRef<()=>val_T>[]
	a?:rmemo_a_T[]
	add<add_val_T>(fn:(sig:sig_T<val_T>, prev_val:add_val_T|undefined)=>add_val_T):sig_T<val_T>
	// memo_<_val_T>(def:memo_def_T<_val_T>):memo_T<_val_T>
}
export interface circular_sig_T extends sig_T<circular_sig_T> {
}
export type lock_memosig_T<val_T> = sig_T<val_T>&{
	lock?:0|1
}
export interface circular_lock_memosig_T extends lock_memosig_T<circular_lock_memosig_T> {
}
export type rmemo_val_T<sig_T> = sig_T extends { ():infer val_T }
	? val_T
	: unknown
export type memo_def_T<val_T> = (sig:sig_T<val_T>)=>val_T
export type rmemo_a_T = [memo_T<unknown>, unknown]
export type rmemo_add_T<val_T, SV> = (sig:sig_T<val_T>, old_val:SV|undefined)=>SV
