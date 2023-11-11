import { circular_idx_ } from '../circular_idx/index.js'
/**
 * Returns Index of the previous item, circular wrapping to the end (`length - 1`).
 * @param {number}length
 * @param {number}index
 * @returns {number}
 */
export function prev_idx_(length, index = 0) {
	return circular_idx_(length, index - 1)
}
export {
	prev_idx_ as _prev_idx,
	prev_idx_ as _idx__prev,
}
