/**
 * Returns Array of values `<= 0` in `val_a`.
 * @param {number[]}val_a
 * @returns {number[]}
 */
export function lte_0_a_(val_a) {
	const lte_0_a = []
	for (let i = 0; i < val_a.length; i++) {
		const val = val_a[i]
		if (val <= 0) {
			lte_0_a.push(val)
		}
	}
	return lte_0_a
}
export {
	lte_0_a_ as lte_0_a1_fn,
	lte_0_a_ as _lte_0_a1,
	lte_0_a_ as _a1__lte__0,
}
