/// <reference types="../be_/index.d.ts" />
/// <reference types="../be_sig_triple/index.d.ts" />
/// <reference types="../rmemo/index.d.ts" />
/// <reference types="./index.d.ts" />
import { be_memo_pair_ } from '../be_memo_pair/index.js'
/**
 * @param {Be<sig_T>|be__val__new_T<unknown>}be_OR_val__new
 * @param {rmemo_subscriber_T[]|[...rmemo_subscriber_T[], be_config_T]}subscriber_a_THEN_config
 * @returns {be_memosig_triple_T}
 * @private
 */
export function be_memosig_triple_(...arg_a) {
	/** @type {be_sig_triple_T} */
	let memo_pair = be_memo_pair_(...arg_a)
	return [
		...memo_pair,
		(ctx, val)=>{
			memo_pair[0](ctx)._ = val
		},
	]
}
