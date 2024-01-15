import { month_a } from '../month_a/index.js'
import { pad2 } from '../pad2/index.js'
/**
 * @param {Date}[date]
 * @returns {string}
 */
export function format_utc_date_prose(date) {
	date = date || new Date()
	return `${month_a[date.getUTCMonth()]} ${pad2(date.getUTCDate())}, ${date.getUTCFullYear()}`
}
