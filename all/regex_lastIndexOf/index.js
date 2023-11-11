/**
 * lastIndexOf with regex
 * @param {string}str
 * @param {RegExp}regex
 * @param {number}startpos
 * @returns {number}
 */
export function regex_lastIndexOf(str, regex, startpos) {
	regex = regex.global ? regex : new RegExp(regex.source, 'g' + (regex.ignoreCase ? 'i' : '') + (regex.multiline ? 'm' : ''))
	if (typeof startpos === 'undefined') {
		startpos = str.length
	} else if (startpos < 0) {
		startpos = 0
	}
	const stringToWorkWith = str.substring(0, startpos + 1)
	let lastIndexOf = -1
	let nextStop = 0
	let result
	while ((result = regex.exec(stringToWorkWith)) != null) {
		lastIndexOf = result.index
		regex.lastIndex = ++nextStop
	}
	return lastIndexOf
}
export { regex_lastIndexOf as lastIndexOf__regex }
