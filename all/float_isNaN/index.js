/**
 * @param {number}number
 * @returns {boolean}
 * @private
 */
export function float_isNaN_(number) {
	return isNaN(parseFloat(number))
}
export { float_isNaN_ as _float_isNaN, float_isNaN_ as isNaN__float, }
