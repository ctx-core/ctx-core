/// <reference types="../attr/index.d.ts" />
import { html_style_ } from '../html_style/index.js'
import { html_styles_o_ } from '../html_styles_o/index.js'
/**
 * Assigns additional styles to the style attribute on the HTMLElement el.
 * @param el{HTMLElement}
 * @param {attr_def_T}style_def_a
 * @returns {HTMLElement}
 * */
export function html_style__assign(el, ...style_def_a) {
	const el_style = el.getAttribute('style') || ''
	const styles_o = html_styles_o_(el_style)
	el.setAttribute('style', html_style_(styles_o, ...style_def_a))
	return el
}
export {
	html_style__assign as assign_style,
	html_style__assign as assign__style,
	html_style__assign as style__assign,
}
