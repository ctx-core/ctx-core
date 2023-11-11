import { wrap_aa_ } from '../wrap_aa/index.js'
/** @typedef {import('../wrap_aa_item/index.d.ts').wrap_aa_item_T}wrap_aa_item_T */
/**
 * @param {unknown}aa_nowrap
 * @param {(v:wrap_aa_item_T)=>union_by_}[by_]
 * @returns {unknown[]}
 */
export function union_by_(aa_nowrap, by_ = v=>v) {
	const a2 = wrap_aa_(aa_nowrap)
	const set = new Set()
	const union = []
	for (let i = 0; i < a2.length; i++) {
		const a = a2[i]
		for (let j = 0; j < a.length; j++) {
			const item = a[j]
			const by = by_(item)
			if (!set.has(by)) {
				set.add(by)
				union.push(item)
			}
		}
	}
	return union
}
export {
	union_by_ as _union_by,
	union_by_ as _union__by,
}
