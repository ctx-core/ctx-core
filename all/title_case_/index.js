/**
 * @param {string}str
 * @returns {string}
 * @private
 */
export function title_case_(str) {
	const title_case =
		str == null
			? ''
			: str
				.toString()
				.replace(
					/\w\S*/g,
					txt=>
						txt.charAt(0).toUpperCase()
						+ txt.slice(1).toLowerCase())
	return title_case
}
export {
	title_case_ as _title_case,
	title_case_ as titleCase,
	title_case_ as toTitleCase,
	title_case_ as titleCase__string,
}
