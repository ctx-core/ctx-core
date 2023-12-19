/// <reference types="../attr/index.d.ts" />
import { html_attr_ } from '../html_attr/index.js'
import { isArray } from '../isArray/index.js'
/**
 * Returns a string of attrs for an html element
 * @param {attr_def_T}attr_def_a
 * @returns {string}
 */
export function html_attrs_(...attr_def_a) {
	/** @type {string[]} */
	let a = []
	for (let i = 0; i < attr_def_a.length; i++) {
		const attr_def = attr_def_a[i]
		if (typeof attr_def === 'string') {
			a.push(attr_def)
		} else if (isArray(attr_def)) {
			a.push(...attr_def)
		} else if (typeof attr_def === 'object') {
			for (const key in attr_def) {
				const val = attr_def[key]
				if (val != null) {
					a.push(html_attr_(key, attr_def[key]))
				}
			}
		}
	}
	return a.join(' ')
}
export { html_attrs_ as attrs_, html_attrs_ as _attrs, }
