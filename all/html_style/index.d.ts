import type { html_attr_def_T } from '../html_attr/index.js'
/**
 * Returns class style attribute from obj
 * @example
 * style_({position: 'absolute, left: '5px'}) // returns 'position: absolute; left: 5px;'
 */
export declare function html_style_(...style_def_a:html_attr_def_T[]):string
export declare function html_style__(
	...memo_style_def_a:html_attr_def_T[]
):(...style_def_a:html_attr_def_T[])=>string
