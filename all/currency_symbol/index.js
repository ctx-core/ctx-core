import { currencies } from '../currencies/index.js'
/**
 * Returns the symbol for the given `currency_code_.currency`. Defaults to `$`
 * @param {import('../currency_code').currency_code_o_T|string}currency_code_
 * @returns {string} * @see {@link https://github.com/bengourley/currency-symbol-map}
 * @see {@link https://raw.githubusercontent.com/bengourley/currency-symbol-map/master/map.js}
 */
export function currency_symbol_(currency_code_) {
	const currency_code =
		currency_code_
		&& (currency_code_.currency_code || currency_code_.currency)
		|| currency_code_
	const currency_symbol = currencies[currency_code] || '$'
	return currency_symbol
}
export {
	currency_symbol_ as _currency_symbol,
	currency_symbol_ as _symbol__currency,
}
