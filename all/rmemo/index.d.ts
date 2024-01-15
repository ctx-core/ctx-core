/// <reference lib="es2021" />
export declare function memo_<val_T>(def:memo_def_T<val_T>):memo_T<val_T>
export declare function sig_<val_T>(init_val:val_T):sig_T<val_T>
export declare function memosig_<val_T>(def:memo_def_T<val_T>):sig_T<val_T>
export declare function lock_memosig_<val_T>(def:memo_def_T<val_T>):sig_T<val_T>
export declare function memo__bind<A extends unknown[], R>(
	fn:(...arg_a:A)=>R
):((...arg_a:A)=>R)&{
	memo_<val_T>(def:memo_def_T<val_T>):memo_T<val_T>
}
export declare function rmemo__on<val_T>(rmemo:rmemo_T<val_T>, off_fn?:(rmemo:rmemo_T<val_T>)=>unknown):void
export declare function rmemo__off<val_T>(rmemo:rmemo_T<val_T>):void
export declare function rmemo__off__add<val_T>(rmemo:rmemo_T<val_T>, off_fn:(rmemo:rmemo_T<val_T>)=>unknown):void
export declare function rmemo__add<val_T, listener_val_T>(
	rmemo:rmemo_T<val_T>,
	listener:(sig:sig_T<val_T>)=>listener_val_T
):()=>void
export type rmemo_T<val_T> = memo_T<val_T>|sig_T<val_T>|lock_memosig_T<val_T>
export type circular_rmemo_T = circular_memo_T|circular_sig_T|circular_lock_memosig_T
export type memo_T<val_T> = (()=>val_T)&{
	readonly _:val_T
	readonly a?:rmemo_a_T[]
	readonly f?:rmemo_f_T
	readonly s?:rmemo_r_T
	readonly t:rmemo_r_T[]
	readonly l:number
	readonly u:rmemo_T<unknown>[]
	readonly v:rmemo_T<unknown>[]
	readonly val:val_T
	add<add_val_T>(add_def:rmemo_add_def_T<val_T, add_val_T>):memo_T<val_T>
	memo_<_val_T>(def:memo_def_T<_val_T>):memo_T<_val_T>
}
export interface circular_memo_T extends memo_T<circular_memo_T> {
}
export type sig_T<val_T> = (()=>val_T)&{
	_:val_T
	readonly a?:rmemo_a_T
	readonly f?:rmemo_f_T
	readonly s?:rmemo_r_T
	readonly t:rmemo_r_T[]
	readonly l:number
	readonly u:rmemo_T<unknown>[]
	readonly v:rmemo_T<unknown>[]
	readonly val:val_T
	add<add_val_T>(fn:rmemo_add_def_T<val_T, add_val_T>):sig_T<val_T>
	memo_<_val_T>(def:memo_def_T<_val_T>):memo_T<_val_T>
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
export type rmemo_a_T = unknown[]
export type rmemo_add_def_T<val_T, add_val_T> = (sig:sig_T<val_T>)=>add_val_T
export type rmemo_f_T = (()=>void)&{
	// readonly l:number
	// readonly s:rmemo_T<unknown>[]
	// readonly t:rmemo_T<unknown>[]
}
export type rmemo_r_T = WeakRef<rmemo_f_T>&{ readonly d?: ()=>rmemo_f_T }
