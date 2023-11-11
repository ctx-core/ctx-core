import { concat } from '../concat/index.js'
import { wrap_a_ } from '../wrap_a/index.js'
import { wrap_aa_ } from '../wrap_aa/index.js'
/**
 * [wrap](#wrap) `a_unwrap` & [concat](#concat) `rest_a`
 * @param {import('../a_nowrap/index.js').a_nowrap_T}a_unwrap
 * @param {import('../wrap_a/index.js').wrap_a_T2}rest_a
 * @returns {import('../wrap_a/index.js').wrap_a_T}
 */
export function wrap_concat(a_unwrap, ...rest_a) {
	return concat(wrap_a_(a_unwrap), ...wrap_aa_(rest_a))
}
export { wrap_concat as concat__wrap }
