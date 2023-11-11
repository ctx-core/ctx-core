import { query_str__searchParams_ } from '../query_str__searchParams/index.js'
import { searchParams_o_ } from '../searchParams_o/index.js'
/**
 * @param {string}query_str
 * @returns {URLSearchParams}
 * @private
 */
export function query_str__searchParams_o_(query_str) {
	const searchParams = query_str__searchParams_(query_str)
	return searchParams_o_(searchParams)
}
