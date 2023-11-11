/**
 * return the `value` if not null or `or_value`
 */
export declare function or_null(opts?:or_null__opts_T):any
export { or_null as or__null }
export interface or_null__opts_T {
	value?:any
	or_value?:any
	nor_value?:any
}
export declare type opts_or = or_null__opts_T
