import { be_ } from '../be_/index.js'
import { rmemo_ } from '../rmemo/index.js'
/** @typedef {import('../be_/index.d.ts').be__val__new_T} */
/** @typedef {import('../rmemo/index.d.ts').rmemo_subscriber_T} */
/** @typedef {import('./index.d.ts').be_rmemo_pair_T} */
/**
 * @param {be__val__new_T<unknown>}val__new
 * @param {rmemo_subscriber_T[]}subscriber_a
 * @returns {be_rmemo_pair_T}
 * @private
 */
export function be_rmemo_pair_(val__new, ...subscriber_a) {
	let oninit
	const be_rmemo_pair = [
		be_(ctx=>{
			let rmemo = rmemo_(()=>val__new(ctx), ...subscriber_a)
			oninit?.(rmemo)
			return rmemo
		}),
		ctx=>be_rmemo_pair[0](ctx)._,
	]
	be_rmemo_pair.config = config__fn=>(config__fn(be_rmemo_pair[0]), be_rmemo_pair)
	be_rmemo_pair.oninit__def = _oninit=>(oninit = _oninit, be_rmemo_pair)
	return be_rmemo_pair
}
