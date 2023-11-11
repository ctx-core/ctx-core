/**
 * @param {number}min
 * @param {number}max
 * @param {()=>number}distribution_
 * @returns {number}
 */
export function distribution_random_int_(
	min = 0, max = 1, distribution_
) {
	return Math.floor(min + distribution_() * (max - min))
}
export { distribution_random_int_ as _int__random__distribution }
