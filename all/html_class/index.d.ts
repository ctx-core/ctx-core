import { html_attr_def_T } from '../html_attr/index.js'
/**
 * Returns class html attribute from r
 * @example
 * class_({class_1: true, html_class__: false, class_3: true}) // returns 'class_1 class_3'
 */
export declare function html_class_(...class_def_a:html_attr_def_T[]):string
export declare function html_class__(
	...memo_class_def_a:html_attr_def_T[]
):(...class_def_a:html_attr_def_T[])=>string
