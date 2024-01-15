import { month_a } from '../month_a/index.js'
import { pad2 } from '../pad2/index.js'
/**
 * @param {Date}[date]
 * @returns {string}
 */
export function MM_yyyy_(date) {
	date = date || new Date()
	return `${month_a[date.getMonth()]} ${date.getFullYear()}`
}
export {
	MM_yyyy_ as _MM_yyyy,
}
/**
 * @param {Date}[date]
 * @returns {string}
 */
export function mm_yyyy_(date) {
	date = date || new Date()
	return `${pad2(date.getMonth() + 1)}/${date.getFullYear()}`
}
export {
	mm_yyyy_ as _mm_yyyy,
}
