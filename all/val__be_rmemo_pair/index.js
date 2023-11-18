import { be_arg_triple__new } from '../be_arg_triple/index.js'
import { be_rmemo_pair_ } from '../be_rmemo_pair/index.js'
import { rmemo_ } from '../rmemo/index.js'
/** @typedef {import('../be_/index.d.ts').Be} */
/** @typedef {import('../be_/index.d.ts').be__params_T} */
/** @typedef {import('../be_/index.d.ts').Ctx} */
/** @typedef {import('../be_rmemo_pair/index.d.ts').be_rmemo_pair_T} */
/**
 * @returns {be_rmemo_pair_T<unknown>}
 */
export function val__be_rmemo_pair_(...rest_a) {
	const [id, val__new, be__params] = be_arg_triple__new(...rest_a)
	if (!val__new) throw new Error('val__be_rmemo_pair__new|val__new argument is required')
	return be_rmemo_pair_(
		id,
		ctx=>rmemo_(()=>val__new(ctx)),
		be__params)
}
