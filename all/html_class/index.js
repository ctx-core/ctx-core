/// <reference types="../attr/index.d.ts" />
import { isArray } from '../isArray/index.js'
/**
 * Returns class html attribute from r
 * @param {attr_def_T}class_def_a
 * @returns {string}
 * @example
 * class_({class_1: true, html_class__: false, class_3: true}) // returns 'class_1 class_3'
 */
export function html_class_(...class_def_a) {
	const a = []
	for (let i = 0; i < class_def_a.length; i++) {
		const class_def = class_def_a[i]
		if (typeof class_def === 'string') {
			a.push(class_def)
		} else if (isArray(class_def)) {
			a.push(...class_def)
		} else if (typeof class_def === 'object') {
			for (let key in class_def) {
				if (class_def[key]) a.push(key)
			}
		}
	}
	return a.join(' ')
}
/**
 * @param {attr_def_T}memo_class_def_a
 * @returns {(...class_def_a:attr_def_T[])=>string}
 */
export function html_class__(...memo_class_def_a) {
	return (...class_def_a)=>html_class_(...memo_class_def_a, ...class_def_a)
}