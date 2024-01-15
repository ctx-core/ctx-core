import { slice } from '../slice/index.js'
/**
 * Splits array into chunks
 * @param {unknown[]}a
 * @param {number}chunk_length
 * @returns {unknown[][]}
 */
export function chunk_aa_(a, chunk_length) {
	let chunk_aa = []
	for (let i = 0; i < a.length; i += chunk_length) {
		chunk_aa.push(slice(a, i, i + chunk_length))
	}
	return chunk_aa
}
export {
	chunk_aa_ as chunk_a2_,
	chunk_aa_ as _a2__chunk,
	chunk_aa_ as _chunk_a2,
	chunk_aa_ as chunk_couple_fn,
}
