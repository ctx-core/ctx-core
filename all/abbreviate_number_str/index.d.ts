/**
 * Normalization text for a number
 * @example
 * `$${abbreviate__number(amount, {6: 'mm', 9: 'bn', 12: 'tn'})}`
 */
export declare function abbreviate_number_str_(number:number|string, denominations:Record<string, string>):string
export {
	abbreviate_number_str_ as _abbreviate_number_str,
	abbreviate_number_str_ as abbreviate__number,
}
