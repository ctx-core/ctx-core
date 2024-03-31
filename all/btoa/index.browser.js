/**
 * @param {string}str
 * @returns {string}
 */
export const btoa = globalThis.btoa
/**
 * @return {typeof btoa}
 */
export function btoa_() {
	return btoa
}
export { btoa_ as _btoa, }
