/// <reference types="../btoa/index.d.ts" />
/**
 * @param {string}str
 * @returns {string}
 */
export function btoa(str) {
	return (
		globalThis['window']
			? window.btoa(str)
			: new Buffer(str).toString('base64')
	)
}
/**
 * @return {typeof btoa}
 */
export function btoa_() {
	return btoa
}
export { btoa_ as _btoa, }
