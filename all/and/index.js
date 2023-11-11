import { wrap_a_ } from '../wrap_a/index.js'
import { wrap_concat } from '../wrap_concat/index.js'
/**
 * Returns the first falsy or last item in `a_nowrap`.
 * @param {import('../a_nowrap/index.js').a_nowrap_T}a_nowrap
 * @returns {unknown}
 */
export function and(a_nowrap) {
	const value_a = wrap_a_(a_nowrap)
	for (let i = 0; i < value_a.length; i++) {
		const value = value_a[i]
		if (!value) return value
	}
	return value_a[value_a.length - 1]
}
/**
 * Returns the first falsy or last item function call or value in `in_value_a` .
 * @param {unknown}a_nowrap
 * @returns {unknown}
 */
export function and_(a_nowrap) {
	const value_a = wrap_a_(a_nowrap)
	for (let i = 0; i < value_a.length; i++) {
		const value = value_a[i]
		if (!value) return value
		if (typeof value === 'function') {
			const out_fn_value = value()
			if (!out_fn_value) return out_fn_value
		}
	}
	return
}
export { and_ as and__fn }
/**
 * Returns function that returns the first falsy or last item function call or value in `in_value_a` .
 * @param {unknown[]}in_value_a
 * @returns {(fn_value_a:unknown[])=>unknown}
 */
export function and_2(in_value_a) {
	return (fn_value_a)=>and_(wrap_concat(in_value_a, fn_value_a))
}
export {
	and_2 as _and_fn,
	and_2 as _and__fn,
}
