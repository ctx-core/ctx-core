/// <reference lib="es2021" />
import type { be_config_T } from '../be_/index.js'
export declare function memo_<val_T, E = unknown>(
	def:memo_def_T<val_T, E>,
	add_def_a1?:rmemo_add_def_T<val_T, E>[]
):memo_T<val_T, E>
export declare function sig_<val_T, E = unknown>(
	init_val:val_T,
	add_def_a1?:rmemo_add_def_T<val_T, E>[]
):sig_T<val_T, E>
export declare function memosig_<val_T, E = unknown>(
	def:memo_def_T<val_T, E>,
	add_def_a1?:rmemo_add_def_T<val_T, E>[]
):sig_T<val_T, E>
export declare function lock_memosig_<val_T, E = unknown>(
	def:memo_def_T<val_T, E>,
	add_def_a1?:rmemo_add_def_T<val_T, E>[]
):sig_T<val_T, E>
export declare function memo__bind<A extends unknown[], R, E = unknown>(
	fn:(...arg_a:A)=>R
):memo__bind_T<A, R, E>
export type memo__bind_T<A extends unknown[], R, E = unknown> =
	((...arg_a:A)=>R)&{
	memo_<val_T>(def:memo_def_T<val_T, E>):memo_T<val_T>
}
export declare function rmemo__on<val_T, E = unknown>(rmemo:rmemo_T<val_T, E>, off_fn?:(rmemo:rmemo_T<val_T, E>)=>unknown):void
export declare function rmemo__off<val_T, E = unknown>(rmemo:rmemo_T<val_T, E>):void
export declare function rmemo__off__add<val_T, E = unknown>(rmemo:rmemo_T<val_T>, off_fn:(rmemo:rmemo_T<val_T, E>)=>unknown):void
export declare function rmemo__add<val_T, listener_val_T, E = unknown>(
	rmemo:rmemo_T<val_T, E>,
	listener:(sig:sig_T<val_T, E>)=>listener_val_T
):()=>void
export declare function rmemo__unset<T>(rmemo:rmemo_T<T>):void
export type rmemo_T<val_T, E = unknown> = memo_T<val_T, E>|sig_T<val_T, E>|lock_memosig_T<val_T, E>
export type rmemolike_T<val_T, E = unknown> = (()=>val_T)&E
export type circular_rmemo_T<E = unknown> =
	(circular_memo_T|circular_sig_T|circular_lock_memosig_T)&E
export type memo_T<val_T, E = unknown> = ((val?:val_T)=>val_T)&{
	readonly _:val_T
	readonly a:[rmemo_add_def_T<val_T, E>[], rmemo_a_T|undefined]
	readonly f?:rmemo_f_T
	readonly l:number
	readonly t:rmemo_r_T[]
	readonly val:val_T
	memo_<_val_T, E = unknown>(def:memo_def_T<_val_T>):memo_T<_val_T, E>
}&E
interface _circular_memo_T extends memo_T<_circular_memo_T> {
}
export type circular_memo_T<E = unknown> = _circular_memo_T&E
export type sig_T<val_T, E = unknown> = ((val?:val_T)=>val_T)&{
	// _:val_T
	readonly _:val_T
	readonly a?:rmemo_a_T
	readonly b:rmemo_add_def_T<val_T, E>[]
	readonly f?:rmemo_f_T
	readonly l:number
	readonly t:rmemo_r_T[]
	readonly val:val_T
	memo_<_val_T, E = unknown>(def:memo_def_T<_val_T>):memo_T<_val_T, E>
}&E
interface _circular_sig_T extends sig_T<_circular_sig_T> {
}
export type circular_sig_T<E = unknown> = _circular_memo_T&E
export type lock_memosig_T<val_T, E = unknown> = sig_T<val_T, {
	lock?:0|1
}&E>
interface _circular_lock_memosig_T extends lock_memosig_T<_circular_lock_memosig_T> {
}
export type circular_lock_memosig_T<E = unknown> = _circular_lock_memosig_T&E
export type rmemo_val_T<sig_T> = sig_T extends { ():infer val_T }
	? val_T
	: unknown
export type memo_def_T<val_T, E = unknown> = (sig:sig_T<val_T, E>)=>val_T
export type rmemo_a_T = unknown[]
export type rmemo_add_def_T<val_T, E = unknown> = (sig:sig_T<val_T, E>)=>unknown
export type rmemo_f_T = (()=>void)&{
	readonly l:number
	readonly s:rmemo_T<unknown>[]
	readonly t:rmemo_T<unknown>[]
}
export type rmemo_r_T = WeakRef<rmemo_f_T>&{ readonly d?: ()=>rmemo_f_T }
export type be_rmemo_config_T<val_T, E = unknown, ns_T extends string = string> =
	be_config_T<ns_T>&{ add: rmemo_add_def_T<val_T, E>}
export type be_rmemo_config_arg_a_T<val_T, E = unknown, ns_T extends string = ''> =
	ns_T extends ''
		? []|[config:be_rmemo_config_T<val_T, E, ns_T>]
		: [config:be_rmemo_config_T<val_T, E, ns_T>]
