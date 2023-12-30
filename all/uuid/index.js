export function uuid_() {
	return crypto.randomUUID()
}
export {
	uuid_ as _uuid,
	uuid_ as uuid,
}
/**
 * @param {string}[uuid]
 * @returns {string}
 * @private
 */
export function short_uuid_(uuid) {
	uuid = (uuid ?? crypto.randomUUID()).replaceAll('-', '')
	let str = ''
	for (let i = 0; i < uuid.length; i += 2)
		str += String.fromCharCode(parseInt(uuid.slice(i, i + 2), 16))
	return btoa(str).replace('==', '')
}
/**
 * @returns {string}
 * @see {@link https://gist.github.com/LeverOne/1308368}
 * @private
 */
export function polyfill_uuid_() {
	let a = 0, b = ''
	for (
		;
		a++ < 36;
		b += a * 51 & 52 /*if "a" is not 9 or 14 or 19 or 24*/
			? (a ^ 15 /*if "a" is not 15*/
				? 8 ^ Math.random() * (a ^ 20 ? 16 : 4 /*unless "a" is 20, in which case a random number from 8 to 11*/)
				: 4 /*otherwise 4*/
			).toString(16)
			: '-' /*in other cases (if "a" is 9,14,19,24) insert "-"*/
	) { /* empty */ }
	return b
}
