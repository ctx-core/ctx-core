/**
 * @returns {string}
 * @private
 */
export function hostname_() {
	const hostname = typeof window === 'object' && window.location.hostname || ''
	return hostname
}
export { hostname_ as _hostname, }
