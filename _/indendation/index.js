/**
 * @param {number}indent_count
 * @param {string}indent
 * @returns {string}
 */
export function indentation_(indent_count, indent = '	') {
	return new Array(indent_count + 1).join(indent)
}
/**
 * @param {number}spaces
 * @returns {RegExp}
 */
export function indentation_regexp_(spaces) {
	const regexpSource = '^' + indentation_(spaces)
	return new RegExp(regexpSource, 'gm')
}
export {
	indentation_ as _indentation,
	indentation_ as $indentation,
	indentation_regexp_ as _indentation_regexp,
	indentation_regexp_ as _regexp__indentation,
	indentation_regexp_ as $regexp__indentation,
}
