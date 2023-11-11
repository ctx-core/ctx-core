import { andand } from '../andand/index.js'
/** @typedef {import('../andand/index.js').andand_key_T}andand_key_T */
/**
 * Returns `andand(obj, name_a) || or_fn(obj, val)`
 * @param {unknown|null}obj
 * @param {andand_key_T[]}name_a
 * @param {import('./index.d.ts').andand_or_T}or_
 * @returns {unknown}
 */
export function andand_or(obj, name_a, or_fn) {
	const val = andand(obj, ...name_a)
	return val || or_fn(val, obj)
}
export { andand_or as andand__or }
