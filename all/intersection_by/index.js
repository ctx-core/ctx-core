/// <reference types="../wrap_aa_item/index.d.ts" />
import { wrap_aa_ } from '../wrap_aa/index.js'
/**
 * @param {unknown}aa_nowrap
 * @param {(v:wrap_aa_item_T<unknown>)=>unknown}by_
 * @returns {unknown[]}
 */
export function intersection_by_(aa_nowrap, by_ = (v)=>v) {
	const a2 = wrap_aa_(aa_nowrap)
	const intersection_map = new Map()
	const current_map = new Map()
	for (let i = 0; i < a2.length; i++) {
		const a = a2[i]
		if (!i) {
			for (let j = 0; j < a.length; j++) {
				const item = a[j]
				const by = by_(item)
				if (!intersection_map.has(by)) {
					intersection_map.set(by, item)
				}
			}
		} else {
			current_map.clear()
			for (let j = 0; j < a.length; j++) {
				const item = a[j]
				const by = by_(item)
				current_map.set(by, item)
			}
			intersection_map.forEach((_val, by)=>{
				if (!current_map.has(by)) {
					intersection_map.delete(by)
				}
			})
		}
	}
	const intersection = []
	intersection_map.forEach((_by, item)=>{
		intersection.push(item)
	})
	return intersection
}
export {
	intersection_by_ as _intersection_by,
	intersection_by_ as _intersection__by,
}
