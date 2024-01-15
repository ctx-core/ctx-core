/**
 * @param {str}str
 * @param {str}padString
 * @param {number}length
 * @returns {string}
 */
export function lPad(str, padString, length) {
	let str2 = str.toString()
	while (str2.length < length) str2 = padString + str2
	return str2
}
