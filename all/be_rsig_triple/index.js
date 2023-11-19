import { be_ } from '../be_/index.js'
import { rsig_ } from '../rmemo/index.js'
/** @typedef {import('../be_/index.d.ts').be__val__new_T} */
/** @typedef {import('../rmemo/index.d.ts').rmemo_subscriber_T} */
/** @typedef {import('./index.d.ts').be_rsig_triple_T} */
/**
 * @param {be__val__new_T<unknown>}val__new
 * @param {rmemo_subscriber_T[]}subscriber_a
 * @returns {be_rsig_triple_T}
 * @private
 */
export function be_rsig_triple_(val__new, ...subscriber_a) {
	let oninit
	const be_rsig_triple = [
		be_(ctx=>{
			let rsig = rsig_(val__new(ctx), ...subscriber_a)
			oninit?.(ctx, rsig)
			return rsig
		}),
		ctx=>be_rsig_triple[0](ctx)._,
		(ctx, val)=>{
			be_rsig_triple[0](ctx)._ = val
		},
	]
	be_rsig_triple.config = params=>(be_rsig_triple[0].config(params), be_rsig_triple)
	be_rsig_triple.oninit = _oninit=>(oninit = _oninit, be_rsig_triple)
	return be_rsig_triple
}
