/// <reference types="../index.d.ts" />
import { currency_symbol_ } from '../currency_symbol/index.js'
import { no_comma_str_ } from '../no_comma_str/index.js'
/**
 * Remove currency delimiter & commas from the string representation of amount.
 */
/**
 * @param {string|number|nullish}amount
 * @param {currency_str__default_params_T|string}params
 * @returns {string|null}
 */
export function unformat_currency_str_(
	amount,
	params
) {
	return (
		amount == null
			? params?.default || null
			: no_comma_str_(
				amount.toString().replace(
					currency_symbol_(params), '')))
}
export {
	unformat_currency_str_ as _unformat_currency_str,
	unformat_currency_str_ as unformat__currency,
}
