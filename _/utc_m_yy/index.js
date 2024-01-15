/**
 * @param {Date}[date]
 * @returns {string}
 */
export function utc_m_yy_(date) {
	date = date || new Date()
	return `${date.getUTCMonth() + 1}/${date.getUTCFullYear().toString().slice(2)}`
}
export {
	utc_m_yy_ as _utc_m_yy,
	utc_m_yy_ as _m_yy__utc,
}
