/**
 * Parses a style string & returns an object with each style
 * @example
 * html_styles_o_('position: absolute; left: 5px;') // returns {position: 'absolute, left: '5px'}
 */
export declare function html_styles_o_(style_str:string):Record<string, string>
export {
	html_styles_o_ as _styles_o,
	html_styles_o_ as _OBJ__styles,
	html_styles_o_ as styles_o_,
}
