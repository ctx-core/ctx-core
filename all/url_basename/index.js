/**
 * @param {string}url
 * @returns {string}
 */
export function url_basename_(url) {
	if (!url) return url
	const location = url.split('?')[0]
	return location?.split('/').pop() || ''
}
export { url_basename_ as _url_basename, }
