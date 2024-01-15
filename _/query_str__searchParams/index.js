/**
 * @param {string}query_str
 * @returns {URLSearchParams}
 * @private
 */
export function query_str__searchParams_(query_str) {
	return new URL(`https://no-domain.ai${query_str}`).searchParams
}
