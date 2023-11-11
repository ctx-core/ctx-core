/**
 * Converts a urn to a url
 * @param {string} uri
 * @returns {string}
 * @see {@link https://danielmiessler.com/study/url-uri/}
 */
export function urn_url_(uri) {
	if (!uri) return uri
	if (uri.indexOf('//') === 0 || uri.indexOf('http://') === 0 || uri.indexOf('https://') === 0) return uri
	return `//${uri}`
}
export {
	urn_url_ as _urn_url,
	urn_url_ as _url__urn,
}
