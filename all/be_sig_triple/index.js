/// <reference types="../be_/index.d.ts" />
/// <reference types="../rmemo/index.d.ts" />
/// <reference types="./index.d.ts" />
import { be_ } from '../be_/index.js'
import { sig_ } from '../rmemo/index.js'
/**
 * @param {Be<sig_T>|be__val__new_T<unknown>}be_OR_val__new
 * @param {be_rmemo_add_def_T[]}[add_def_a1]
 * @param {be_config_T}[config]
 * @returns {be_sig_triple_T}
 * @private
 */
export function be_sig_triple_(
	be_OR_val__new,
	add_def_a1,
	config
) {
	/** @ype {Be<sig_T>} */
	let be =
		be_OR_val__new.is_be
			? be_OR_val__new
			: be_(ctx=>
				sig_(
					be_OR_val__new(ctx),
					(add_def_a1 ?? []).map(add_def=>
						sig=>add_def(ctx, sig))),
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
 * @returns {be_sig_triple_T}
 * @private
 */
export function ns_be_sig_triple_(
	ns,
	val__new,
	add_def_a1
) {
	return be_sig_triple_(val__new, add_def_a1, { ns })
}
/**
 * @param {string}id
 * @param {be__val__new_T<unknown>}val__new
 * @param {be_rmemo_add_def_T[]}[add_def_a1]
 * @returns {be_sig_triple_T}
 * @private
 */
export function id_be_sig_triple_(
	id,
	val__new,
	add_def_a1
) {
	return be_sig_triple_(val__new, add_def_a1, { id })
}
/**
 * @param {string}ns
 * @param {string}id
 * @param {be__val__new_T<unknown>}val__new
 * @param {be_rmemo_add_def_T[]}[add_def_a1]
 * @returns {be_sig_triple_T}
 * @private
 */
export function ns_id_be_sig_triple_(
	ns,
	id,
	val__new,
	add_def_a1
) {
	return be_sig_triple_(val__new, add_def_a1, { ns, id })
}
