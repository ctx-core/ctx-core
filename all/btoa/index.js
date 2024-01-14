/// <reference types="../btoa/index.d.ts" />
import { process_release_name } from '../process_release_name/index.js'
/**
 * @param {string}str
 * @returns {string}
 */
export function btoa(str) {
	return (
		process_release_name
			? new Buffer(str).toString('base64')
			: window.btoa(str)
	)
}
/**
 * @return {typeof btoa}
 */
export function btoa_() {
	return btoa
}
export { btoa_ as _btoa, }
