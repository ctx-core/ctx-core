/**
 * @param {Date}[date]
 * @returns {number}
 * @private
 */
export function ms_(date) {
	return (date ?? new Date).getTime()
}
export {
	ms_ as milliseconds_,
	ms_ as _milliseconds,
}
