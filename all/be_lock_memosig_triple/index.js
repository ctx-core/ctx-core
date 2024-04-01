/// <reference types="../be_/index.d.ts" />
/// <reference types="../be_sig_triple/index.d.ts" />
/// <reference types="../rmemo/index.d.ts" />
/// <reference types="./index.d.ts" />
import { be_ } from '../be_/index.js'
import { lock_memosig_ } from '../rmemo/index.js'
/**
 * @param {Be<sig_T>|be__val__new_T<unknown>}be_OR_val__new
 * @param {be_rmemo_add_def_T[]}[add_def_a1]
 * @param {be_config_T}[config]
 * @returns {be_lock_memosig_triple_T}
 * @private
 */
export function be_lock_memosig_triple_(
	be_OR_val__new,
	add_def_a1,
	config
) {
	/** @type {Be<sig_T>} */
	let be =
		be_OR_val__new.is_be
			? be_OR_val__new
			: be_(ctx=>
				lock_memosig_(
					memo=>be_OR_val__new(ctx, memo),
					(add_def_a1 ?? []).map(
						add_def=>memo=>add_def(ctx, memo))),
			config)
	return [
		be,
		ctx=>be(ctx)(),
		(ctx, val)=>{
			be(ctx).set(val)
		},
	]
}
/**
 * @param {string}ns
 * @param {be__val__new_T<unknown>}val__new
 * @param {be_rmemo_add_def_T[]}[add_def_a1]
 * @returns {be_lock_memosig_triple_T}
 * @private
 */
export function ns_be_lock_memosig_triple_(
	ns,
	val__new,
	add_def_a1
) {
	return be_lock_memosig_triple_(val__new, add_def_a1, { ns })
}
/**
 * @param {string}id
 * @param {be__val__new_T<unknown>}val__new
 * @param {be_rmemo_add_def_T[]}[add_def_a1]
 * @returns {be_lock_memosig_triple_T}
 * @private
 */
export function id_be_lock_memosig_triple_(
	id,
	val__new,
	add_def_a1
) {
	return be_lock_memosig_triple_(val__new, add_def_a1, { id })
}
/**
 * @param {string}ns
 * @param {string}id
 * @param {be__val__new_T<unknown>}val__new
 * @param {be_rmemo_add_def_T[]}[add_def_a1]
 * @returns {be_lock_memosig_triple_T}
 * @private
 */
export function ns_id_be_lock_memosig_triple_(
	ns,
	id,
	val__new,
	add_def_a1
) {
	return be_lock_memosig_triple_(val__new, add_def_a1, { ns, id })
}
