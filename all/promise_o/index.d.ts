import type { promise_reject_T, promise_resolve_T } from '../promise/index.js'
export declare function promise_o_<T>():promise_o_T<T>
export interface promise_o_T<T> {
	promise:Promise<T>
	resolve:promise_resolve_T<T>
	reject:promise_reject_T
}
