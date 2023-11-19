import { be_ } from '../be_/index.js'
/** @typedef {import('../rc_be_/index.d.ts').rc_be__val__new_T} */
export const be_m_set_key = Symbol('be_m_set')
/**
 * @param {rc_be__val__new_T}val__new
 * @returns {import('./index.d.ts').rc_be__return_T}
 * @private
 */
export function rc_be_(val__new) {
	return (ctx1, opts1)=>{
		const ctx_any = ctx1
		const destroy_cb_a = []
		const val_this = {
			on_destroy,
			onDestroy: on_destroy
		}
		/** @type {rc_be__val__new_T} */
		const val__new = val__new ? val__new : key_or_val_
		const be1 = be_(val__new)
		let be_m_set = ctx_any[be_m_set_key]
		if (!be_m_set) {
			be_m_set = new Map()
			ctx_any[be_m_set_key] = be_m_set
		}
		let rc_set = be_m_set.get(be1)
		if (!rc_set) {
			rc_set = new Set()
			be_m_set.set(be1, rc_set)
		}
		const owner = (opts1 === null || opts1 === void 0 ? void 0 : opts1.owner) || {}
		rc_set.add(owner)
		let destroy = ()=>{
			rc_set.delete(owner)
			if (!rc_set.size) {
				for (const destroy_cb of destroy_cb_a) {
					destroy_cb()
				}
				ctx1.delete(be1)
			}
		}
		return {
			value: be1(ctx1, opts1),
			destroy
		}
		function on_destroy(...in_destroy_cb_a) {
			destroy_cb_a.push(...in_destroy_cb_a)
		}
	}
}
export {
	rc_be_ as _rc_be,
	rc_be_ as _rc_b,
}
