import { pad2 } from '../pad2/index.js'
import { yyyymmdd_ } from '../yyyymmdd/index.js'
/**
 * @param {Date}[date]
 * @returns {string}
 */
export function yyyymmddhhmmss_(date) {
	date = date || new Date()
	return yyyymmdd_(date) + pad2(date.getHours()) + pad2(date.getMinutes()) + pad2(date.getSeconds())
}
export { yyyymmddhhmmss_ as _yyyymmddhhmmss, }
