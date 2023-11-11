/**
 * @param {Date}[date]
 * @returns {number}
 * @private
 */
export function ms_(date = new Date()) {
	return date.getTime()
}
export {
	ms_ as milliseconds_,
	ms_ as _milliseconds,
}
