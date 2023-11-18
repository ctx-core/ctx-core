import { be_ } from '../be_/index.js'
import { be_arg_triple__new } from '../be_arg_triple/index.js'
import { rsig_ } from '../rmemo/index.js'
/** @typedef {import('../be_/index.d.ts').be__params_T} */
/** @typedef {import('../be_/index.d.ts').Ctx} */
/** @typedef {import('../be_rsig_triple_/index.d.ts').be_rsig_triple_T} */
/**
 * @returns {be_rsig_triple_T}
 * @private
 */
export function val__be_rsig_triple_(...arg_a) {
	let [
		id,
		val__new,
		be__params
	] =
		/** @type {[string, (ctx:Ctx)=>unknown, be__params_T]} */
		be_arg_triple__new(...arg_a)
	if (!val__new) {
		val__new = ()=>undefined
	}
	const _be_ =
		(be__params && be__params.be_)
		?? be_
	const val$_ =
		id
			? _be_(id, ctx=>rsig_(val__new(ctx)), be__params)
			: _be_(ctx=>rsig_(val__new(ctx)), be__params)
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
