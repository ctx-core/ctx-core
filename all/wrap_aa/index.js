import { wrap_a_ } from '../wrap_a/index.js'
/**
 * Returns `wrap_aa_T` wrapped as a 2-dimensional array
 * @param {import('../a_nowrap/index.js').a_nowrap_T}a_nowrap
 * @returns {import('../_function_types/index.js').wrap_aa_T}
 */
export function wrap_aa_(a_nowrap) {
	return wrap_a_(a_nowrap).map(a_nowrap=>wrap_a_(a_nowrap))
}
export {
	wrap_aa_ as wrap_a2_,
	wrap_aa_ as _wrap_a2,
	wrap_aa_ as _a2__wrap,
}
