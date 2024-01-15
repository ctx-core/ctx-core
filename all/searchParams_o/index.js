/**
 * @param {URL|URLSearchParams}url_or_searchParams
 * @returns {object}
 * @private
 */
export function searchParams_o_(url_or_searchParams) {
	const searchParams_o = {}
	const searchParams = url_or_searchParams.searchParams || url_or_searchParams
	for (const [key, value] of searchParams) {
		searchParams_o[key] = value
	}
	return searchParams_o
}
