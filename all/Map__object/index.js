/**
 * @param {Map<string|number|symbol, unknown>}M
 * @returns {Record<string|number|symbol, unknown>}
 * @private
 */
export function Map__object_(M) {
	return Object.fromEntries([...M])
}
export { Map__object_ as M__o_ }
