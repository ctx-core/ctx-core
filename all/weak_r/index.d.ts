import type { keyof_T } from '../keyof/index.js'
declare const add_strong_sym:unique symbol
declare const delete_strong_sym:unique symbol
export declare function weak_r_<
	Obj extends object = object
>(back_o?:object):Obj
export { weak_r_ as weak_ctx_, }
export declare function strong__call<
	Obj extends weak_r_T
>(obj:Obj, prop:keyof_T):void
export { strong__call as ref_strong }
export declare function strong__assign<
	Obj extends weak_r_T,
	Val = unknown
>(obj:Obj, prop:keyof_T, val:Val):void
export { strong__assign as set_strong }
export declare function weak__call<
	Obj extends weak_r_T
>(obj:Obj, prop:keyof_T):void
export { weak__call as ref_weak }
export declare function weak__unset<
	Obj extends weak_r_T
>(obj:Obj, prop:keyof_T):void
export { weak__unset as unset_weak }
export interface weak_r_T {
	[add_strong_sym](prop:keyof_T, key?:unknown):void
	[delete_strong_sym](prop:keyof_T):void
}
