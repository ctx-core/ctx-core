import type { nullish } from '../nullish/index.js'
export declare function money_str_(
	amount:number,
	params?:money_str__params_T
):string|nullish
export {
	money_str_ as _money_str,
	money_str_ as format__money,
}
export interface money_str__params_T {
	digits?:number
}
export declare type money_str_params_I = money_str__params_T
