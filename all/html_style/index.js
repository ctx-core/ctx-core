/// <reference types="../attr/index.d.ts" />
import { isArray } from '../isArray/index.js'
const eol_semicolon_regex = /;\s*$/
/**
 * Returns class style attribute from obj
 * @param {attr_def_T}style_def_a
 * @returns {string}
 * @example
 * style_({position: 'absolute, left: '5px'}) // returns 'position: absolute; left: 5px;'
 */
export function html_style_(...style_def_a) {
	const a = []
	for (let i = 0; i < style_def_a.length; i++) {
		const style_def = style_def_a[i]
		if (typeof style_def === 'string') {
			a.push(semicolon__style_(style_def))
		} else if (isArray(style_def)) {
			a.push(...style_def.map($=>semicolon__style_($)))
		} else if (typeof style_def === 'object') {
			for (let key in style_def) {
				const val = style_def[key]
				if (val != null) a.push(`${key}: ${val};`)
			}
		}
	}
	return a.join(' ')
}
export { html_style_ as style_, html_style_ as _style, }
/**
 * @param {string}style
 * @returns {string}
 * @private
 */
function semicolon__style_(style) {
	return (
		eol_semicolon_regex.test(style)
			? style
			: `${style};`
	)
}
/**
 * @param {attr_def_T}memo_style_def_a
 * @returns {(...style_def_a:string[])=>string}
 * @private
 */
export function html_style__(memo_style_def_a) {
	return (...style_a)=>html_style_(memo_style_def_a, ...style_a)
}
export { html_style__ as style__, html_style__ as style_2, }
