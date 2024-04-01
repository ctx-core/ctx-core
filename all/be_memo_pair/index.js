/// <reference types="../be_/index.d.ts" />
/// <reference types="../rmemo/index.d.ts" />
/// <reference types="./index.d.ts" />
import { be_ } from '../be_/index.js'
import { memo_ } from '../rmemo/index.js'
/**
 * @param {Be|be__val__new_T<unknown>}be_OR_val__new
 * @param {be_rmemo_add_def_T[]}[add_def_a1]
 * @param {be_config_T}[config]
 * @returns {be_memo_pair_T}
 * @private
 */
export function be_memo_pair_(
	be_OR_val__new,
	add_def_a1,
	config,
) {
	/** @type {Be} */
	let be =
		be_OR_val__new.is_be
			? be_OR_val__new
			: be_(ctx=>
				memo_(
					memo=>be_OR_val__new(ctx, memo),
					(add_def_a1 ?? []).map(add_def=>{
						return memo=>add_def(ctx, memo)
					})),
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
 * @returns {be_memo_pair_T}
 * @private
 */
export function ns_be_memo_pair_(
	ns,
	val__new,
	add_def_a1
) {
	return be_memo_pair_(val__new, add_def_a1, { ns })
}
/**
 * @param {string}id
 * @param {be__val__new_T<unknown>}val__new
 * @param {be_rmemo_add_def_T[]}[add_def_a1]
 * @returns {be_memo_pair_T}
 * @private
 */
export function id_be_memo_pair_(
	id,
	val__new,
	add_def_a1
) {
	return be_memo_pair_(val__new, add_def_a1, { id })
}
/**
 * @param {string}ns
 * @param {string}id
 * @param {be__val__new_T<unknown>}val__new
 * @param {be_rmemo_add_def_T[]}[add_def_a1]
 * @returns {be_memo_pair_T}
 * @private
 */
export function ns_id_be_memo_pair_(
	ns,
	id,
	val__new,
	add_def_a1
) {
	return be_memo_pair_(val__new, add_def_a1, { ns, id })
}
