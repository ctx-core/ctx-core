/// <reference types="../be_/index.d.ts" />
/// <reference types="../be_sig_triple/index.d.ts" />
/// <reference types="../rmemo/index.d.ts" />
/// <reference types="./index.d.ts" />
import { be_ } from '../be_/index.js'
import { lock_memosig_ } from '../rmemo/index.js'
/**
 * @param {Be<sig_T>|be__val__new_T<unknown>}be_OR_val__new
 * @param {memo_subscriber_T[]|[...memo_subscriber_T[], be_config_T]}subscriber_a_THEN_config
 * @returns {be_lock_memosig_triple_T}
 * @private
 */
export function be_lock_memosig_triple_(
	be_OR_val__new,
	...subscriber_a_THEN_config
) {
	let config =
		typeof subscriber_a_THEN_config[subscriber_a_THEN_config.length - 1] === 'object'
			? subscriber_a_THEN_config.pop()
			: 0
	/** @type {Be<sig_T>} */
	let be =
		be_OR_val__new.is_be
			? be_OR_val__new
			: be_(ctx=>
				lock_memosig_(
					memo=>be_OR_val__new(ctx, memo),
					...subscriber_a_THEN_config.map(subscriber=>
						sig=>subscriber(ctx, sig))),
			config)
	return [
		be,
		ctx=>be(ctx)(),
		(ctx, val)=>{
			be(ctx)._ = val
		},
	]
}
