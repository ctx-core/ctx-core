/**
 * @param {number}min
 * @param {number}max
 * @param {()=>number}distribution_
 * @returns {number}
 */
export function distribution_random_float_(
	min = 0.0, max = 1.0, distribution_
) {
	return distribution_() * (max - min) + min
}
export { distribution_random_float_ as _float__random__distribution }
