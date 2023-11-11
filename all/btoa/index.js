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
 * @return {typeof import('../btoa').btoa}
 */
export function btoa_() {
	return btoa
}
export { btoa_ as _btoa, }
