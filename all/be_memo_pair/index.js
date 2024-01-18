/// <reference types="../be_/index.d.ts" />
/// <reference types="../rmemo/index.d.ts" />
/// <reference types="./index.d.ts" />
import { be_ } from '../be_/index.js'
import { memo_ } from '../rmemo/index.js'
/**
 * @param {Be|be__val__new_T<unknown>}be_OR_val__new
 * @param {be_config_T}[config]
 * @returns {be_memo_pair_T}
 * @private
 */
export function be_memo_pair_(
	be_OR_val__new,
	config,
) {
	let add_def_a = []
	/** @type {Be} */
	let be =
		be_OR_val__new.is_be
			? be_OR_val__new
			: be_(ctx=>
				add_def_a.reduce(
					(memo, add_def)=>
						memo.add((...arg_a)=>add_def(ctx, ...arg_a)),
					memo_(
						memo=>be_OR_val__new(ctx, memo))),
			config)
	let be_memo_pair = [
		be,
		ctx=>be(ctx)._,
		(ctx, val)=>{
			be(ctx)._ = val
		},
	]
	be_memo_pair.add = add_def=>{
		add_def_a.push(add_def)
		return be_memo_pair
	}
	return be_memo_pair
}
/**
 * @param {string}ns
 * @param {be__val__new_T<unknown>}val__new
 * @returns {be_memo_pair_T}
 * @private
 */
export function ns_be_memo_pair_(
	ns,
	val__new
) {
	return be_memo_pair_(val__new, { ns })
}
/**
 * @param {string}id
 * @param {be__val__new_T<unknown>}val__new
 * @returns {be_memo_pair_T}
 * @private
 */
export function id_be_memo_pair_(
	id,
	val__new
) {
	return be_memo_pair_(val__new, { id })
}
/**
 * @param {string}ns
 * @param {string}id
 * @param {be__val__new_T<unknown>}val__new
 * @returns {be_memo_pair_T}
 * @private
 */
export function ns_id_be_memo_pair_(
	ns,
	id,
	val__new
) {
	return be_memo_pair_(val__new, { ns, id })
}
