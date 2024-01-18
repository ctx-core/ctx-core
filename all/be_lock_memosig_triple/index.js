/// <reference types="../be_/index.d.ts" />
/// <reference types="../be_sig_triple/index.d.ts" />
/// <reference types="../rmemo/index.d.ts" />
/// <reference types="./index.d.ts" />
import { be_ } from '../be_/index.js'
import { lock_memosig_ } from '../rmemo/index.js'
/**
 * @param {Be<sig_T>|be__val__new_T<unknown>}be_OR_val__new
 * @param {be_config_T}[config]
 * @returns {be_lock_memosig_triple_T}
 * @private
 */
export function be_lock_memosig_triple_(
	be_OR_val__new,
	config
) {
	let add_def_a = []
	/** @type {Be<sig_T>} */
	let be =
		be_OR_val__new.is_be
			? be_OR_val__new
			: be_(ctx=>
				add_def_a.reduce(
					(memosig, add_def)=>memosig.add((...arg_a)=>add_def(ctx, ...arg_a)),
					lock_memosig_(memo=>be_OR_val__new(ctx, memo))),
			config)
	let be_lock_memosig_triple = [
		be,
		ctx=>be(ctx)(),
		(ctx, val)=>{
			be(ctx)._ = val
		},
	]
	be_lock_memosig_triple.add = add_def=>{
		add_def_a.push(add_def)
		return be_lock_memosig_triple
	}
	return be_lock_memosig_triple
}
/**
 * @param {string}ns
 * @param {be__val__new_T<unknown>}val__new
 * @returns {be_lock_memosig_triple_T}
 * @private
 */
export function ns_be_lock_memosig_triple_(
	ns,
	val__new
) {
	return be_lock_memosig_triple_(val__new, { ns })
}
/**
 * @param {string}id
 * @param {be__val__new_T<unknown>}val__new
 * @returns {be_lock_memosig_triple_T}
 * @private
 */
export function id_be_lock_memosig_triple_(
	id,
	val__new
) {
	return be_lock_memosig_triple_(val__new, { id })
}
/**
 * @param {string}ns
 * @param {string}id
 * @param {be__val__new_T<unknown>}val__new
 * @returns {be_lock_memosig_triple_T}
 * @private
 */
export function ns_id_be_lock_memosig_triple_(
	ns,
	id,
	val__new
) {
	return be_lock_memosig_triple_(val__new, { ns, id })
}
