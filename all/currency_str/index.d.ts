export declare function currency_str_(
	amount:string|number,
	params?:currency_str__default_params_T|string
):string
export {
	currency_str_ as _currency_str,
	currency_str_ as format__currency,
}
export interface currency_str__default_params_T {
	default?:string
	currency_code?:string
	currency?:string
	digits?:number
}
export declare type currency_str_default_params_I = currency_str__default_params_T
export declare function currency_str__(
	params?:currency_str__default_params_T|string
):(amount:number)=>string
export {
	currency_str__ as currency_str_2,
	currency_str__ as _currency_str_fn,
	currency_str__ as _format__currency,
}
