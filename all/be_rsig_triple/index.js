import { be_ } from '../be_/index.js'
import { be_arg_triple__new } from '../be_arg_triple/index.js'
import { rsig_ } from '../rmemo/index.js'
/** @typedef {import('../be_/index.d.ts').be__params_T} */
/** @typedef {import('../be_/index.d.ts').Ctx} */
/** @typedef {import('../rmemo/index.d.ts').readwrite_rmemo_T} */
/** @typedef {import('./index.d.ts').be_rsig_triple_T} */
/**
 * @returns {be_rsig_triple_T}
 * @private
 */
export function be_rsig_triple_(...arg_a) {
	let [
		id,
		rsig__new,
		be__params
	] = be_arg_triple__new(...arg_a)
	if (!rsig__new) {
		rsig__new = ()=>rsig_()
	}
	const _be_ =
		(be__params && be__params.be_)
		?? be_
	const val$_ =
		id
			? _be_(id, rsig__new, be__params)
			: _be_(rsig__new, be__params)
	const val_ = ctx=>val$_(ctx)._
	const val__set = (ctx, val)=>{
		val$_(ctx)._ = val
	}
	return [
		val$_,
		val_,
		val__set
	]
}
