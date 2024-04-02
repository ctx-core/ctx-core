/// <reference lib="es2021" />
import type { wide_ctx_T } from '../be_/index.js'
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
	memo_<val_T>(
		def:memo_def_T<val_T, E>,
		add_def_a1?:rmemo_add_def_T<val_T, E>[]
	):memo_T<val_T>
}
export declare function rmemo__on<val_T, E = unknown>(rmemo:rmemo_T<val_T, E>, off_fn?:(rmemo:rmemo_T<val_T, E>)=>unknown):void
export declare function rmemo__off<val_T, E = unknown>(rmemo:rmemo_T<val_T, E>):void
export declare function rmemo__off__add<val_T, E = unknown>(rmemo:rmemo_T<val_T, E>, off_fn:(rmemo:rmemo_T<val_T, E>)=>unknown):void
export declare function rmemo__add<val_T, listener_val_T, E = unknown>(
	rmemo:rmemo_T<val_T, E>,
	listener:(sig:sig_T<val_T, E>)=>listener_val_T
):()=>void
export declare function rmemo__unset<T>(rmemo:rmemo_T<T>):void
export type rmemo_T<val_T, E = unknown> = memo_T<val_T, E>|sig_T<val_T, E>|lock_memosig_T<val_T, E>
export type rmemolike_T<val_T, E = unknown> = (()=>val_T)&E
export type circular_rmemo_T<E = unknown> =
	(circular_memo_T|circular_sig_T|circular_lock_memosig_T)&E
export type memo_T<val_T, E = unknown> = (()=>val_T)&{
	memo_<_val_T, E = unknown>(
		def:memo_def_T<_val_T>,
		add_def_a1?:rmemo_add_def_T<val_T, E>[]
	):memo_T<_val_T, E>
	val:val_T
	readonly a:unknown
	readonly b:unknown
	readonly d:unknown
	readonly l:unknown
	readonly r:unknown
	readonly u:unknown
	readonly t:unknown
}&E
interface _circular_memo_T extends memo_T<_circular_memo_T> {
}
export type circular_memo_T<E = unknown> = _circular_memo_T&E
export type sig_T<val_T, E = unknown> = memo_T<val_T, E>&{
	set(val:val_T):void
}
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
export type rmemo_r_T = WeakRef<rmemo_T<unknown>&{ readonly d?: ()=>rmemo_T<unknown> }>
export type be_rmemo_add_def_T<
	val_T,
	ns_T extends string,
	E = unknown,
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
> = (ctx:ctx_T, sig:sig_T<val_T, E>)=>unknown
