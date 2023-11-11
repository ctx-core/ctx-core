import { ms_ } from '../ms/index.js'
/**
 * @param {Date}[date]
 * @returns {number}
 * @private
 */
export function seconds_(date = new Date()) {
	return ms_(date) / 1000
}
export { seconds_ as _seconds, }
