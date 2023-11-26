import { be_ } from '../be_/index.js'
import { sig_ } from '../rmemo/index.js'
/** @typedef {import('../be_/index.d.ts').Be} */
/** @typedef {import('../be_/index.d.ts').be__val__new_T} */
/** @typedef {import('../be_/index.d.ts').be_config_T} */
/** @typedef {import('../rmemo/index.d.ts').sig_T} */
/** @typedef {import('../rmemo/index.d.ts').rmemo_subscriber_T} */
/** @typedef {import('./index.d.ts').be_sig_triple_T} */
/**
 * @param {Be<sig_T>|be__val__new_T<unknown>}be_OR_val__new
 * @param {rmemo_subscriber_T[]|[...rmemo_subscriber_T[], be_config_T]}subscriber_a_THEN_config
 * @returns {be_sig_triple_T}
 * @private
 */
export function be_sig_triple_(
	be_OR_val__new,
	...subscriber_a_THEN_config
) {
	let config =
		typeof subscriber_a_THEN_config[subscriber_a_THEN_config.length - 1] === 'object'
			? subscriber_a_THEN_config.pop()
			: undefined
	/** @type {Be<sig_T>} */
	let be =
		be_OR_val__new.is_be
			? be_OR_val__new
			: be_(ctx=>
				sig_(
					be_OR_val__new(ctx),
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
