/**
 * @param {Date}start
 * @param {number}timout_ms
 * @returns {boolean}
 */
export function timedout_(start, timout_ms) {
	return new Date().getTime() >= start.getTime() + timout_ms
}
export { timedout_ as _timedout, }
