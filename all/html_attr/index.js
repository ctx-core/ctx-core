import { html_ } from '../html/index.js'
/**
 * @param {string}key
 * @param {string}val
 * @returns {string}
 * @private
 */
export function html_attr_(key, val) {
	return key + '="' + html_(val) + '"'
}
export { html_attr_ as attr_ }
/**
 * @param {string}key
 * @param {string}val
 * @returns {string}
 * @private
 */
export function raw__html_attr_(key, val) {
	return key + '="' + val + '"'
}
export { raw__html_attr_ as raw__attr_ }
