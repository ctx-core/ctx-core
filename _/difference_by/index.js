import { wrap_aa_ } from '../wrap_aa/index.js'
/**
 * @param {unknown}aa_nowrap
 * @param {(item:unknown)=>unknown}[by_]
 * @returns {unknown[]}
 */
export function difference_by_(aa_nowrap, by_ = item=>item) {
	const a2 = wrap_aa_(aa_nowrap)
	const set = new Set()
	const difference = []
	const { length } = a2
	for (let i_ = 0; i_ < length; i_++) {
		const i = length - 1 - i_
		const a = a2[i]
		for (let j = 0; j < a.length; j++) {
			const item = a[j]
			const by = by_(item)
			if (i) {
				set.add(by)
			} else if (!set.has(by)) {
				difference.push(item)
			}
		}
	}
	return difference
}
export {
	difference_by_ as _difference_by,
	difference_by_ as _difference__by,
}
