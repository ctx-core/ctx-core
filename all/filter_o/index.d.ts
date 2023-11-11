/**
 * Returns a filter_h1 with the values filtered by `fn`.
 */
export declare function filter_o_<
	Obj extends object = object
>(
	in_r:Obj|undefined,
	fn?:(val:Obj[keyof Obj], key:string, h1:Obj)=>Obj[keyof Obj],
):filter_o_T|undefined
export {
	filter_o_ as filter_r_,
	filter_o_ as filter_h_,
	filter_o_ as _filter_h1,
	filter_o_ as _h1__filter,
}
export interface filter_o_T extends Record<string, boolean> {
}
export type filter_r_T = filter_o_T
/**
 * Returns a function that calls filter_r_ with fn
 */
export declare function filter_o__<
	Obj extends object = object
>(
	fn?:(val:Obj[keyof Obj], key:string, l0_r:Obj)=>any
):((l1_r:Obj|undefined)=>filter_o_T|undefined)
export {
	filter_o__ as filter_r__,
	filter_o__ as filter_h_2,
	filter_o__ as _fn__h1__filter,
}
