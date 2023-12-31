/// <reference types="../be_/index.d.ts" />
/// <reference types="../rmemo/index.d.ts" />
/// <reference types="./index.d.ts" />
import { be_ } from '../be_/index.js'
import { memo_ } from '../rmemo/index.js'
/**
 * @param {Be|be__val__new_T<unknown>}be_OR_val__new
 * @param {memo_subscriber_T[]|[...memo_subscriber_T[], be_config_T]}subscriber_a_THEN_config
 * @returns {be_memo_pair_T}
 * @private
 */
export function be_memo_pair_(
	be_OR_val__new,
	...subscriber_a_THEN_config
) {
	let config =
		typeof subscriber_a_THEN_config[subscriber_a_THEN_config.length - 1] === 'object'
			&& subscriber_a_THEN_config.pop()
	/** @type {Be} */
	let be =
		be_OR_val__new.is_be
			? be_OR_val__new
			: be_(ctx=>
				memo_(
					memo=>be_OR_val__new(ctx, memo),
					...subscriber_a_THEN_config.map(subscriber=>
						memo=>subscriber(ctx, memo))),
			config)
	return [
		be,
		ctx=>be(ctx)._,
		(ctx, val)=>{
			be(ctx)._ = val
		},
	]
}
