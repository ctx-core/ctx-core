/**
 * Is e0_a `===` e1_a? Checks first level equality.
 * @param {unknown[]}e0_a
 * @param {unknown[]}e1_a
 * @returns {boolean}
 */
export function eql_a_(e0_a, e1_a) {
	if (e0_a === e1_a) return true
	if (e0_a == null || e1_a == null) return false
	if (e0_a.length != e1_a.length) return false
	for (let i = 0; i < e0_a.length; ++i) {
		if (e0_a[i] !== e1_a[i]) return false
	}
	return true
}
export {
	eql_a_ as eql_a1_fn,
	eql_a_ as _eql_a1,
	eql_a_ as _eql__a1,
}
