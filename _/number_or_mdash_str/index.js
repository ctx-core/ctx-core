import { isNumber_ } from '../isNumber/index.js'
export function number_or_mdash_str_(number) {
	return isNumber_(number) ? `${number}` : '—'
}
export { number_or_mdash_str_ as _number_or_mdash_str, number_or_mdash_str_ as _text__number__or__mdash, }
