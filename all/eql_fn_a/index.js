/** @typedef {import('../a_item/index.d.ts').a_item_T} */
/**
 * Is i0_a `===` to i1_a based on `fn(a, b, i)`? Checks first level equality.
 * @param i0_a{unknown[]}
 * @param i1_a{unknown[]}
 * @param fn{(a:a_item_T, b:a_item_T, idx:number)=>boolean}
 * @returns {boolean}
 */
export function eql_fn_a_(i0_a, i1_a, fn) {
	if (i0_a === i1_a) return true
	if (i0_a == null || i1_a == null) return false
	if (i0_a.length != i1_a.length) return false
	for (let i = 0; i < i0_a.length; ++i) {
		if (!fn(i0_a[i], i1_a[i], i)) return false
	}
	return true
}
export {
	eql_fn_a_ as eql_fn_a1_fn,
	eql_fn_a_ as _eql_fn_a1,
	eql_fn_a_ as _eql__a1__fn,
}
