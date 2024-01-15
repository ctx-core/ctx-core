/// <reference types="../index.d.ts" />
import { comma_number_str_ } from '../comma_number_str/index.js'
import { isNumber_ } from '../isNumber/index.js'
import { nullish__none_ } from '../nullish__none/index.js'
/**
 * Formats money value with commas (no currency type)
 * @param {number}amount
 * @param {money_str__params_T}params
 * @returns {string|nullish}
 */
export function money_str_(
	amount,
	params
) {
	return nullish__none_([amount], ()=>{
		const digits =
			isNumber_(params && params.digits)
				? params && params.digits
				: 2
		return comma_number_str_(amount.toFixed(digits))
	})
}
export {
	money_str_ as _money_str,
	money_str_ as format__money,
}
