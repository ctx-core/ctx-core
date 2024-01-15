/**
 * @param {number}diff
 * @returns {Date}
 */
export function diff_date(diff) {
	const now = new Date()
	now.setTime(now.valueOf() + diff)
	return now
}
