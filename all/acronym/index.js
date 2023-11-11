/**
 * @param {string}string
 * @returns {string}
 */
export function acronym_(string) {
	return string && string.match(/\b(\w)/g)?.join('') || ''
}
export { acronym_ as _acronym, }
