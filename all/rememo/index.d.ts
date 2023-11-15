export declare function rememo_<val_T>(def:()=>val_T):rememo_T<val_T>
export type rememo_T<val_T> =
	((rememo:rememo_T<val>)=>val_T)
	&rememo_o_T<val_T>
export type rememo_o_T<val_T> = {
	val:val_T
	listeners:Set<WeakRef<rememo_T<val_T>>>
}
