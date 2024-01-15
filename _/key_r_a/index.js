import { concat } from '../concat/index.js'
import { wrap_a_ } from '../wrap_a/index.js'
/**
 * Returns a hash of arrays grouped by each key in each `ctx` in `ctx_a`.
 * @param ctx_a_nowrap{Record<string, object>|Record<string, object>[]}
 * @returns {Record<string, object[]>}
 */
export function key_r_a_(ctx_a_nowrap) {
	const ctx_a = wrap_a_(ctx_a_nowrap)
	const a_key_r_a = {}
	for (let i = 0; i < ctx_a.length; i++) {
		const ctx = ctx_a[i]
		for (let key in ctx) {
			const value = ctx[key]
			a_key_r_a[key] = concat(a_key_r_a[key] || [], value)
		}
	}
	return a_key_r_a
}
export {
	key_r_a_ as key_h_a_,
	key_r_a_ as key_h_a1_fn,
	key_r_a_ as _key_h_a1,
	key_r_a_ as _a1_key_hash,
	key_r_a_ as _hash__key__a1,
}
