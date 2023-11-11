import { pad2 } from '../pad2/index.js'
/**
 * @param {Date}[date]
 * @returns {string}
 */
export function yyyymmdd_(date) {
	date = date || new Date()
	return date.getFullYear() + pad2(date.getMonth() + 1) + pad2(date.getDate())
}
export { yyyymmdd_ as _yyyymmdd, }
