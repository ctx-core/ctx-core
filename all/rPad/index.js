/**
 * @param {string}str
 * @param {string}padString
 * @param {number}length
 * @returns {string}
 */
export function rPad(str, padString, length) {
	let str2 = str.toString()
	while (str2.length < length) str2 = str2 + padString
	return str2
}
