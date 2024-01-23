/// <reference types="../attr/index.d.ts" />
import { isArray } from '../isArray/index.js'
/**
 * Returns class style attribute from obj
 * @param {attr_def_T}style_def_a
 * @returns {string}
 * @example
 * style_({position: 'absolute, left: '5px'}) // returns 'position: absolute; left: 5px;'
 */
export function html_style_(...style_def_a) {
	let a = []
	for (let style_def of style_def_a) {
		if (typeof style_def === 'string') {
			a.push(style_def.replace(/;$/, '') + ';')
		} else if (isArray(style_def)) {
			a.push(...style_def.map($=>$.replace(/;$/, '') + ';'))
		} else if (typeof style_def === 'object') {
			for (let key in style_def) {
				const val = style_def[key]
				if (val != null) a.push(`${key}:${val};`)
			}
		}
	}
	return a.join(' ')
}
/**
 * @param {attr_def_T}memo_style_def_a
 * @returns {(...style_def_a:string[])=>string}
 * @private
 */
export function html_style__(memo_style_def_a) {
	return (...style_a)=>html_style_(memo_style_def_a, ...style_a)
}
/**
 * @param {string}background_url
 * @returns {string}
 * @private
 */
export function background_image_style_(background_url) {
	return html_style_({
		'background-image': html_style_url_(background_url)
	})
}
/**
 * @param {string}background_url
 * @returns {{'background-image': string}}
 * @private
 */
export function background_image_style_o_(background_url) {
	return {
		'background-image': html_style_url_(background_url)
	}
}
/**
 * @param {string}url
 * @returns {string}
 * @private
 */
export function html_style_url_(url) {
	return 'url(' + '\'' + url + '\')'
}
