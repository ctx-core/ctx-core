import type { andand_key_T } from '../andand/index.js'
/**
 * Applies `&&` to a chain of property name or function with return value from `obj`.
 */
export declare function andandfn<
	Val extends unknown = unknown,
	Out extends unknown = unknown
>(obj:Val, ...name_a:andand_key_T<Val>[]):Out
export declare type andandfn_T<
	Val extends unknown = unknown,
	Out extends unknown = unknown
> = (obj:Val)=>Out
export { andandfn as andand__fn, }
/**
 * Returns a function that calls `andand_(obj, ...name_a)`
 */
export declare function andandfn_<
	In extends unknown = unknown,
	Out extends unknown = unknown
>(
	...name_a:andand_key_T<In>[]
):andandfn_T<In, Out>
export {
	andandfn_ as _andand_,
	andandfn_ as _fn__andand__fn,
}
