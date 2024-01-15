import { pad2 } from '../pad2/index.js'
import { utc_yyyymmdd_ } from '../utc_yyyymmdd/index.js'
/**
 * @param {Date}[date]
 * @returns {string}
 */
export function utc_yyyymmddhhmmss_(date) {
	date = date || new Date()
	return (
		utc_yyyymmdd_(date)
		+ pad2(date.getUTCHours())
		+ pad2(date.getUTCMinutes())
		+ pad2(date.getUTCSeconds()))
}
export {
	utc_yyyymmddhhmmss_ as _utc_yyyymmddhhmmss,
	utc_yyyymmddhhmmss_ as _yyyymmddhhmmss__utc,
}
