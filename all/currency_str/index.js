import { currency_symbol_ } from '../currency_symbol/index.js'
import { money_str_ } from '../money_str/index.js'
/**
 * Formats currency to USD ($) with commas
 * @param {string|number}amount
 * @param {import('./index').currency_str__default_params_T|string}params
 * @returns {string} * @example
 * currency_str_(1000000) // $1,000,000.00
 * @example
 * currency_str_(1000000, {digits: 0}) // $1,000,000
 */
export function currency_str_(
	amount,
	params
) {
	const amount_num = parseFloat(amount)
	return (
		Number.isNaN(amount_num)
			? params && params.default || ''
			: `${currency_symbol_(params)}${money_str_(amount_num, params)}`
	)
}
export {
	currency_str_ as _currency_str,
	currency_str_ as format__currency,
}
/**
 * @param {import('../currency_str').currency_str__default_params_T|string}params
 * @returns {(amount:number)=>string}
 */
export function currency_str__(params) {
	return amount=>currency_str_(amount, params)
}
export {
	currency_str__ as currency_str_2,
	currency_str__ as _currency_str_fn,
	currency_str__ as _format__currency,
}
