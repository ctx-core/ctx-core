/// <reference types="../index.d.ts" />
/**
 * @param {nested_url_segment_a_T}url_segment_a
 * @returns {string}
 */
export function url__join(...url_segment_a) {
	let url = ''
	let in_query = 0
	for (let url_segment of url_segment_a.flat(Infinity)) {
		let url_segment_str = '' + url_segment
		url += (
			~[
				'/',
				'?',
				'&'
			].indexOf(url_segment_str[0])
			|| (!url && url_segment_str.includes('://'))
				? url_segment_str
				: in_query
					? '&' + url_segment_str
					: '/' + url_segment_str
		)
		if (url_segment_str.includes('?')) in_query = 1
	}
	return url
}
export {
	url__join as join_url,
}
