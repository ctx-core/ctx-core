/**
 * Parses a style string & returns an object with each style
 * @param {string}style_str
 * @returns {Record<string, string>}
 * @example
 * html_styles_o_('position: absolute; left: 5px;') // returns {position: 'absolute, left: '5px'}
 */
export function html_styles_o_(style_str) {
	const style_str_a = (style_str || '').split(/ *; */)
	const styles_o = {}
	for (let i = 0; i < style_str_a.length; i++) {
		const i_style_str = style_str_a[i]
		if (!i_style_str) continue
		const [style_name, style_value] = i_style_str.split(/ *: */)
		styles_o[style_name] = style_value
	}
	return styles_o
}
