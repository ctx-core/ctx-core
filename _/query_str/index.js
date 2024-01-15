import { isArray } from '../isArray/index.js'
/**
 * @param {import('./index.d.ts').query_T}[query]
 * @param {string}[prefix]
 * @returns {string}
 * @private
 */
export function query_str_(
	query = '',
	prefix = query[0] === '?' ? '' : '?'
) {
	if (typeof query === 'string') return `${prefix}${query}`
	const query_str_a = []
	if (query instanceof Map) {
		for (let [key, val] of query.entries()) {
			query_str_a__push(key, val)
		}
	} else {
		for (let key in query) {
			query_str_a__push(key, query[key])
		}
	}
	return query_str_a.length ? `${prefix}${query_str_a.join('&')}` : ''
	/**
	 * @param {string}key
	 * @param {import('./index.d.ts').query_value_T}in_query_value
	 */
	function query_str_a__push(
		key,
		in_query_value
	) {
		const query_value =
			in_query_value == null ? '' : in_query_value
		if (isArray(query_value)) {
			for (const $value_item of query_value) {
				query_str_a.push(`${encodeURIComponent(key)}[]=${encodeURIComponent($value_item)}`)
			}
		} else {
			query_str_a.push(`${encodeURIComponent(key)}=${encodeURIComponent(query_value)}`)
		}
	}
}
export {
	query_str_ as _str__query,
	query_str_ as _query_str,
}
